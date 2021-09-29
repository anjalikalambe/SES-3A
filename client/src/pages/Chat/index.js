import "./index.css"
import PurpleContainer from "../../components/PurpleContainer";
import WhiteInput from "../../components/WhiteInput";
import Avatar from '@material-ui/core/Avatar'
import Grid from "@material-ui/core/Grid";
import React, {useRef, useState} from "react";
import me from '../../assets/imgs/2.jpg'
import other from '../../assets/imgs/3.jpg'
import addIcon from '../../assets/imgs/picture_icon.png'

const USER_TYPE = {
	me: 0,
	other: 1
}

const ary = [0, 1]

function Chat() {
	const imgInputRef = useRef()
	const [inputValue, setInputValue] = useState('')
	const [chatList, setChatList] = useState([{
		id: 1,
		type: 0,
		message: other,
		messageType: 'picture'
	}, {
		id: 2,
		type: 1,
		message: other,
		messageType:'picture'
	}, {
		id: 3,
		type: 0,
		message: 'Test',
		messageType: 'text'
	}, {
		id: 4,
		type: 1,
		message: 'Test',
		messageType: 'text'
	}
	])

	const getRandom = () => {
		const l = Math.floor(Math.random() * ary.length)
		return ary.slice(l, 1)[0]

	}

	const onChange = (e) => {
		setInputValue(e.target.value)
	}

	const autoScroll =()=>{
		const ele = document.querySelector('.chat-container')
		ele.scrollTop = ele.scrollHeight + 60
	}

	const onKeyPress = (e) => {
		if (e.code === 'Enter') {
			setChatList([...chatList, {id: chatList.length + 1, type: getRandom(), message: inputValue,messageType: 'text'}])
			autoScroll()
		}
	}

	const onAddImg = ()=>{
		imgInputRef.current.click()
	}

	const transformFileToBase64 = (file) => {
		return new Promise(reslove => {
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = () => {
				reslove(reader.result)
			}
		})
	}



	const onUploadChange = async (e) => {
		if (e.target.files) {
			const [file] = e.target.files
			if(!file) return
			const fileSuffix = file.name.substring(file.name.lastIndexOf('.') + 1)
			if (!['jpg', 'png', 'jpeg','gif'].includes(fileSuffix)) {
				return
			}
			const imgUrl =await transformFileToBase64(file)
			setChatList([...chatList, {id: chatList.length + 1, type: USER_TYPE.me, message: imgUrl,messageType: 'picture'}])
			autoScroll()
		}
	}


	return (
		<PurpleContainer width={600}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<h2 className="title">
						name
					</h2>
				</Grid>
				<div className='chat-container'>
					{
						chatList.map(v => <Grid className='chat-item' key={v.id} item xs={12}>
								{
									v.type === USER_TYPE.me ? <div className='me'>
										{
											v.messageType==='picture'?<img src={v.message} className='chat-img-me'/>:
												<div className='me-message'>{v.message}</div>
										}

										<Avatar src={me}/>
									</div> : <div className='other'>
										<Avatar src={other}/>

										{
											v.messageType==='picture'?<img src={v.message} className='chat-img'/>:
												<div className='other-message'>{v.message}</div>
										}
									</div>
								}
							</Grid>
						)
					}
				</div>
				<Grid item xs={12}>
					<div className='input-wrapper'>
						<WhiteInput className='chat-input' value={inputValue} onKeyPress={onKeyPress} onChange={onChange}/>
						<img src={addIcon} onClick={onAddImg} className='add-icon'/>
					</div>

					<input ref={imgInputRef} type='file' style={{display:'none'}}
						   onChange={onUploadChange}
					/>
				</Grid>
			</Grid>
		</PurpleContainer>
	)
}

export default Chat