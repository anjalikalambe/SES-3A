import "./index.css"
import PurpleContainer from "../../components/PurpleContainer";
import WhiteInput from "../../components/WhiteInput";
import Avatar from '@material-ui/core/Avatar'
import Grid from "@material-ui/core/Grid";
import React, {useRef, useState, useEffect, useCallback} from "react";
import me from '../../Assets/imgs/chat-picture1.jpg'
import other from '../../Assets/imgs/chat-picture2.jpg'
import addIcon from '../../Assets/imgs/002.jpg'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import {withStyles} from '@material-ui/core/styles';
import iconSmile from '../../Assets/imgs/001.jpg'
import {Picker} from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import io from 'socket.io-client';
import {Cloudinary} from 'cloudinary-core';

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

const cloud = new Cloudinary({cloud_name: 'dumvulsf6', secure: true});

// Socket to server
const socket = io.connect('ws://localhost:3000');

function Chat(props) {
	const imgInputRef = useRef()
	const [inputValue, setInputValue] = useState('')
	const [chatList, setChatList] = useState([]) // Populate with last few messages from db.
	const [open, setOpen] = useState(false)
	const [bigImgUrl, setBigImgUrl] = useState('')
	const [showEmoji, setShowEmoji] = useState(false)

	// Join a chat room based on given user IDs
	const chatRoom = [props.myId, props.otherId].sort().join('');
	socket.emit('join', {'room': chatRoom});

	// Retrieve avatars from cloudinary
	const AVATAR = {
		me: cloud.url("avatar/" + props.myId),
		other: cloud.url("avatar/" + props.otherId)
	}

	// Hook to listen for incoming messages to update chatList.
	useEffect(() => {
		socket.on('private_response', (data) => {
			setChatList(prevList => [...prevList, {
					id: chatList.length + 1,
					type: USER_TYPE.other, // incoming messages always from other user
					message: data.message,
					messageType: data.messageType
			}]);
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

	const emitMessage = (msg, msgType) => {
		socket.emit('private_message', {
			'message': msg,
			'target': chatRoom,
			'sender': props.myId, // Provide sender's ID for db to store.
			'type': msgType
		});
	}

	const onKeyPress = (e) => {
		if (e.code === 'Enter' && inputValue !== '') {
			setChatList(prevList => [...prevList, {
				id: chatList.length + 1,
				type: USER_TYPE.me,
				message: inputValue,
				messageType: 'text'
			}]);
			// Emit message to socket and clear input box.
			emitMessage(inputValue, 'text');
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
			setChatList(prevList => [...prevList, {
				id: chatList.length + 1,
				type: USER_TYPE.me,
				message: imgUrl,
				messageType: 'picture'
			}])
			emitMessage(imgUrl, 'picture');
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
		setChatList(prevList => [...prevList, {
			id: chatList.length + 1,
			type: USER_TYPE.me,
			message: emoji.native,
			messageType: 'emoji'
		}])
		emitMessage(emoji.native, 'emoji')
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

											<Avatar src={AVATAR.me}/>
										</div> : <div className='other'>
											<Avatar src={AVATAR.other}/>

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
		</>
	)
}

export default Chat