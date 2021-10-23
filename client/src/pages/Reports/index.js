import "././report.css"
import React, {useState} from "react";
import PurpleContainer from "../../components/PurpleContainer";
import WhiteInput from "../../components/WhiteInput";
import WhiteSelect from "../../components/WhiteSelect";
import Grid from "@material-ui/core/Grid";
import Tables from "../../components/Table";
import Sidebar from "../../components/Sidebar";

function Reports() {
	const [list, setList] = useState([{userId: 1, userName: 'test', gender: 'man'}])

	const [userInfo, setUserInfo] = useState({
		userId: '',
		userName: '',
		gender: ''
	})

	const onChange = (e, key) => {
		setUserInfo(v => ({...v, [key]: e.target.value}))
	}

	const onSubmit =()=>{
		console.log('user',userInfo)
		setList([...list,userInfo])
	}

	return (
		<>
				<Sidebar/>

			<PurpleContainer width={600}>
				<Grid item xs={12}>
					<WhiteSelect onChange={(e)=>{
						if(e.target.value==='Show Reported Users'){
							window.scroll({top:document.body.clientHeight,behavior:'smooth'})
						}
					}} options={["Report Users", "Show Reported Users"]}/>
				</Grid>
			</PurpleContainer>
			<PurpleContainer width={600} className='test'>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<h2 className="title">
							Report User
						</h2>
					</Grid>
					<Grid item xs={12}>
						<WhiteInput onChange={e => onChange(e, 'userName')} label="User's Full Name"/>
					</Grid>
					<Grid item xs={6}>
						<WhiteInput onChange={e => onChange(e, 'userId')} label="User's ID"/>
					</Grid>
					<Grid item xs={6}>
						<WhiteSelect onChange={e => onChange(e, 'gender')} label="Gender"
									 options={["Male", "Female", "Unidentified"]}/>
					</Grid>
					<Grid item xs={12}>
						<WhiteSelect label="Reason"
									 options={["Inappropriate Messages", "Inappropriate Photos", "Scam/Phishing/Bot", "Others"]}/>
					</Grid>
					<Grid item xs={12}>
						<WhiteInput label="Description of Report" multiline rows={4}/>
					</Grid>
					<Grid item xs={12}>
						<div onClick={onSubmit} className="report-button">
							Submit
						</div>
					</Grid>
				</Grid>
			</PurpleContainer>
			<PurpleContainer width={1000}>
				<div className='report-title'>
				 Show Reported Users
				</div>
				<Tables list={list}/>
			</PurpleContainer>
		</>
	)
}

export default Reports;
