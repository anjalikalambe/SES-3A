var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.json([
		{
			roomName: "Chill Room",

			meetingID: "JAP43ZST0ZL",
			members: 15,
			joinStatus: "True",
			participants: [
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
			],
		},
		{
			roomName: "Gaming Room",

			meetingID: "QIO00THS1VR",
			members: 16,
			joinStatus: "False",
			participants: [
				{
					id: 3298,
					firstname: "New",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
			],
		},
		{
			roomName: "Studying Room",

			meetingID: "ADQ88UFO9XU",
			members: 6,
			joinStatus: "False",
			participants: [
				{
					id: 234423,
					firstname: "Hi",
					lastname: "There",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
			],
		},
		{
			roomName: "Discussion Room",

			meetingID: "BCT75CZJ4GI",
			members: 10,
			joinStatus: "True",
			participants: [
				{
					id: 12334,
					firstname: "Hey ",
					lastname: "Homie",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
			],
		},
		{
			roomName: "Studying Room",

			meetingID: "ADQ88UFO9XU",
			members: 6,
			joinStatus: "False",
			participants: [
				{
					id: 234423,
					firstname: "Hi",
					lastname: "There",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
			],
		},
		{
			roomName: "Studying Room",

			meetingID: "ADQ88UFO9XU",
			members: 6,
			joinStatus: "False",
			participants: [
				{
					id: 234423,
					firstname: "Hi",
					lastname: "There",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
			],
		},
		{
			roomName: "Studying Room",

			meetingID: "ADQ88UFO9XU",
			members: 6,
			joinStatus: "False",
			participants: [
				{
					id: 234423,
					firstname: "Hi",
					lastname: "There",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
			],
		},
	]);
});

module.exports = router;
