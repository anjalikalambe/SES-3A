import "./index.css"
import PurpleContainer from "../../components/PurpleContainer";
import WhiteInput from "../../components/WhiteInput";
import Avatar from '@material-ui/core/Avatar'
import Grid from "@material-ui/core/Grid";
import React, {useRef, useState, useEffect, useCallback} from "react";
import me from '../../assets/imgs/chat-picture1.jpg'
import other from '../../assets/imgs/chat-picture2.jpg'
import addIcon from '../../assets/imgs/002.jpg'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import {withStyles} from '@material-ui/core/styles';
import iconSmile from '../../assets/imgs/001.jpg'
import {Picker} from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import io from 'socket.io-client';
import ChatTester from "../../components/ChatTester";

const USER_TYPE = {
	me: 0,
	other: 1
}

const ary = [0, 1]

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

// Socket to server
const socket = io.connect('http://localhost:5000');
// Join room - Replace with user authentication and user ID.
const chatRoom = 'testroom'; // Setup room based on user id and authentication
socket.emit('join', {'room': chatRoom});

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
		messageType: 'picture'
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
	const [open, setOpen] = useState(false)
	const [bigImgUrl, setBigImgUrl] = useState('')
	const [showEmoji, setShowEmoji] = useState(false)

	// // For using ChatTester component
	// const [messages, setMessages] = useState(['start'])

	// Hook to listen for incoming messages to update chatList.
	useEffect(() => {
		socket.on('private_response', (msg) => {
			setChatList(prevList => [...prevList, {
					id: chatList.length + 1,
					type: 1, // incoming messages always from other user
					message: msg,
					messageType: 'text' // Update backend to accept more than just text
			}]);
			// // For using ChatTester
			// setMessages([...messages, msg]);
			autoScroll();
		});

		return () => {
			socket.off('private_response');
		}

	}, []);

	const getRandom = () => {
		const l = Math.floor(Math.random() * ary.length)
		return ary.slice(l, 1)[0]

	}

	const onChange = (e) => {
		setInputValue(e.target.value)
	}

	const autoScroll = () => {
		const ele = document.querySelector('.chat-container')
		setTimeout(() => {
			ele.scrollTop = ele.scrollHeight + 60
		}, 200)
	}

	const emitMessage = () => {
		socket.emit('private_message', {
			'message': inputValue,
			'target': chatRoom
		});
	}

	const onKeyPress = (e) => {
		if (e.code === 'Enter' && inputValue != '') {
			setChatList(prevList => [...prevList, {
				id: chatList.length + 1,
				// type: getRandom(),
				type: 0,
				message: inputValue,
				messageType: 'text'
			}]);
			// Emit message to socket.
			emitMessage();
			setInputValue('');
			autoScroll();
		}
	}

	const onAddImg = () => {
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
			if (!file) return
			const fileSuffix = file.name.substring(file.name.lastIndexOf('.') + 1)
			if (!['jpg', 'png', 'jpeg', 'gif'].includes(fileSuffix)) {
				return
			}
			const imgUrl = await transformFileToBase64(file)
			setChatList([...chatList, {
				id: chatList.length + 1,
				type: USER_TYPE.me,
				message: imgUrl,
				messageType: 'picture'
			}])
			autoScroll()
		}
	}

	const handleClose = () => {
		setOpen(false)
	}


	const showDialog = (imgUrl) => {
		setOpen(true)
		setBigImgUrl(imgUrl)
	}

	const choiceEmoji = (emoji, event) => {
		setChatList([...chatList, {
			id: chatList.length + 1,
			type: getRandom(),
			message: emoji.native,
			messageType: 'emoji'
		}])
		autoScroll()
	}


	return (
		<>
			<PurpleContainer width={600}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<h2 className="title">
							Chat
						</h2>
					</Grid>
					<div className='chat-container'>
						{
							chatList.map(v => <Grid className='chat-item' key={v.id} item xs={12}>
									{
										v.type === USER_TYPE.me ? <div className='me'>
											{
												v.messageType === 'picture' ?
													<img onClick={() => showDialog(v.message)} src={v.message}
														 className='chat-img-me'/> :
													<div
														className={`${v.messageType === 'emoji' ? 'me-message-emoji' : 'me-message'}`}>{v.message}</div>
											}

											<Avatar src={me}/>
										</div> : <div className='other'>
											<Avatar src={other}/>

											{
												v.messageType === 'picture' ?
													<img onClick={() => showDialog(v.message)} src={v.message}
														 className='chat-img'/> :
													<div
														className={`${v.messageType === 'emoji' ? 'other-message-emoji' : 'other-message'}`}>{v.message}</div>
											}
										</div>
									}
								</Grid>
							)
						}
					</div>
					<Grid item xs={12}>
						<div className='input-wrapper'>
							<WhiteInput className='chat-input' value={inputValue} onKeyPress={onKeyPress}
										onChange={onChange}/>
							<img src={iconSmile} onClick={() => setShowEmoji(!showEmoji)} className='add-icon'/>
							<img src={addIcon} onClick={onAddImg} className='add-icon'/>
						</div>

						{
							showEmoji ?
								<Picker set='apple' inclde={['people']}  showPreview={false} showSkinTones={false}  onClick={choiceEmoji}/> : null
						}
						<input ref={imgInputRef} type='file' style={{display: 'none'}}
							   onChange={onUploadChange}
						/>
					</Grid>
				</Grid>

			</PurpleContainer>

			<Dialog maxWidth={800} onClose={handleClose} open={open}>
				<img src={bigImgUrl} className='big-img-url'/>
			</Dialog>

			{/* for using chat tester
			{messages.map(msg => (
				<div>
					<p>{msg}</p>
				</div>
			))}

			<ChatTester /> */}

		</>
	)
}

export default Chat