import "./style.css"
import PurpleContainer from "../../components/PurpleContainer";
import WhiteInput from "../../components/WhiteInput";
import WhiteSelect from "../../components/WhiteSelect";
import Grid from "@material-ui/core/Grid";
import React, {useRef} from "react";
import {DarkPurpleButton} from "../../components/Buttons";
import avatar from '../../assets/imgs/camera.png'


function Profile() {
	const inputRef = useRef()

	const handleUpload = () => {
		inputRef.current.click()
	}

	const onUploadChange = (e) => {
		if (e.target.files) {
			const [file] = e.target.files
			const fileSuffix = file.name.substring(file.name.lastIndexOf('.') + 1)
			console.log('fileSufix', fileSuffix)
			if (!['jpg', 'png', 'jpeg'].includes(fileSuffix)) {
				return
			}
			console.log('to upload')
			// TODO:upload api

		}
	}

	return (
		<PurpleContainer width={600}>
			<Grid container spacing={3}>

				<Grid item xs={12}>
					<h2 className="title">
						Edit Profile
					</h2>
				</Grid>
				<Grid item xs={12} className='avatar-container'>
					<div className='avatar'>
						<img onClick={handleUpload} src={avatar} className='avatar-img'/>
					</div>
				</Grid>
				<Grid item xs={6}>
					<WhiteInput label="First Name"/>
				</Grid>
				<Grid item xs={6}>
					<WhiteInput label="Last Name"/>
				</Grid>
				<Grid item xs={6}>
					<WhiteInput label="Age"/>
				</Grid>
				<Grid item xs={6}>
					<WhiteSelect label="Gender" options={["Male", "Female", "Unknown"]}/>
				</Grid>
				<Grid item xs={12}>
					<WhiteInput label="Country of residence"/>
				</Grid>
				<Grid item xs={12}>
					<WhiteInput label="About me" multiline rows={4}/>
				</Grid>
				<Grid item xs={12}>
					<WhiteSelect label="Interests" options={["Music", "Sport", "Social", "Movie", "Game", "Travel"]}/>
				</Grid>
				<Grid item xs={12}>
					<DarkPurpleButton variant="contained" color="primary" className="save-button">
						Save
					</DarkPurpleButton>
				</Grid>
			</Grid>

			<input type='file' className='upload-input' ref={inputRef} onChange={onUploadChange}/>
		</PurpleContainer>
	)
}

export default Profile
;