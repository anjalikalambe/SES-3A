import React, { useState } from "react";
import "./UserInfo.css";
import redHeart from "../../Assets/UserProfile/redHeart.png";
import whiteHeart from "../../Assets/UserProfile/whiteHeart.png";
import location from "../../Assets/UserProfile/location.png";
import age from "../../Assets/UserProfile/age.png";
import gender from "../../Assets/UserProfile/gender.png";
import info from "../../Assets/UserProfile/info.png";
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalFooter from 'react-bootstrap/ModalFooter'
// import Button from 'react-bootstrap/Button'
import Chat from "../../pages/Chat/index";
import { Button } from "@material-ui/core";


const UserInfo = () => {
	const [likeStatus, setLikeStatus] = useState(false);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	const handleLikeFunction = () => {
		setLikeStatus(!likeStatus);
	};

	return (
		<div className="user-info-section">
			<div className="user-info-section-top">
				<div className="user-info-top">
					<button>Participants</button>
					<Button href="/chat"><button>Messages</button></Button>
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Chat</Modal.Title>
						</Modal.Header>
						<Chat />
						<Modal.Footer>
							<Button variant="primary" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
					<button>Profile</button>
				</div>
				<div className="connected-user">
					<span>You're currently connected to:</span>
					<div className="connected-user-profile">
						<img
							className="user-profile-img"
							src="https://media-exp1.licdn.com/dms/image/C5603AQEkY3K05CxYbQ/profile-displayphoto-shrink_100_100/0/1561721402295?e=1639008000&v=beta&t=GhaDte1fHt_a4wlsRG586EK5pRuq7rNOeTgd2kHUZ_o"
							alt=""
						/>
						<div className="connected-user-like">
							<div
								className="connected-user-like-profile"
								onClick={handleLikeFunction}
							>
								<img
									className="like-status"
									src={likeStatus ? redHeart : whiteHeart}
									alt=""
								/>
								<span>{likeStatus ? "Unlike" : "Like"}</span>
							</div>
							<h5>James</h5>
						</div>
					</div>
				</div>
			</div>
			<div className="user-info-section-bottom">
				<div className="user-info-subsection">
					<img src={location} />
					<h3>Sydney, Australia</h3>
				</div>
				<div className="user-info-subsection">
					<img src={age} alt="" />

					<h3>28</h3>
				</div>
				<div className="user-info-subsection">
					<img src={whiteHeart} alt="" />

					<h3>Hiking</h3>
				</div>

				<div className="user-info-subsection">
					<img src={gender} alt="" />

					<h3>Female</h3>
				</div>
				<div className="user-info-subsection">
					<img src={info} alt="" />

					<h3>
						My name is James, I enjoy going on hikes and meeting new
						people. Looking for a relationship.
					</h3>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
