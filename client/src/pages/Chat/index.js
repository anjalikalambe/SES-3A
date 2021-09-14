import "./index.css"
import PurpleContainer from "../../components/PurpleContainer";
import WhiteInput from "../../components/WhiteInput";
import Avatar from '@material-ui/core/Avatar'
import Grid from "@material-ui/core/Grid";
import React, {useState} from "react";
import me from '../../assets/imgs/2.jpg'
import other from '../../assets/imgs/3.jpg'

const USER_TYPE = {
	me: 0,
	other: 1
}

const ary = [0, 1]

function Chat() {
	const [inputValue, setInputValue] = useState('')
	const [chatList, setChatList] = useState([{
		id: 1,
		type: 0,
		message: 'Hello'
	}, {
		id: 2,
		type: 1,
		message: 'Test'
	}, {
		id: 3,
		type: 0,
		message: 'Test'
	}, {
		id: 4,
		type: 1,
		message: 'Test'
	}
	])

	const getRandom = () => {
		const l = Math.floor(Math.random() * ary.length)
		return ary.slice(l, 1)[0]

	}

	const onChange = (e) => {
		setInputValue(e.target.value)
	}

	const onKeyPress = (e) => {
		if (e.code === 'Enter') {
			setChatList([...chatList, {id: chatList.length + 1, type: getRandom(), message: inputValue}])
			const ele = document.querySelector('.chat-container')
			ele.scrollTop = ele.scrollHeight + 40
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
										<div className='me-message'>{v.message}</div>
										<Avatar src={me}/>
									</div> : <div className='other'>
										<Avatar src={other}/>
										<div className='other-message'>{v.message}</div>
									</div>
								}
							</Grid>
						)
					}
				</div>
				<Grid item xs={12}>
					<WhiteInput value={inputValue} onKeyPress={onKeyPress} onChange={onChange}/>
				</Grid>
			</Grid>
		</PurpleContainer>
	)
}

export default Chat