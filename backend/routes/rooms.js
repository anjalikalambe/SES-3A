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
			males: 4,
			females: 7,
			participants: [
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
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
			males: 8,
			females: 14,
			participants: [
				{
					id: 3298,
					firstname: "New",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
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
			roomName: "Studying Room",

			meetingID: "ADQ88UFO9XU",
			members: 6,
			joinStatus: "False",
			males: 9,
			females: 13,
			participants: [
				{
					id: 234423,
					firstname: "Hi",
					lastname: "There",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
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
			roomName: "Discussion Room",

			meetingID: "BCT75CZJ4GI",
			members: 10,
			joinStatus: "True",
			males: 8,
			females: 4,
			participants: [
				{
					id: 12334,
					firstname: "Hey ",
					lastname: "Homie",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
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
			roomName: "Studying Room",

			meetingID: "ADQ88UFO9XU",
			members: 6,
			joinStatus: "False",
			males: 10,
			females: 11,
			participants: [
				{
					id: 234423,
					firstname: "Hi",
					lastname: "There",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
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
			roomName: "Studying Room",

			meetingID: "ADQ88UFO9XU",
			members: 6,
			joinStatus: "False",
			males: 4,
			females: 1,
			participants: [
				{
					id: 234423,
					firstname: "Hi",
					lastname: "There",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
				{
					id: 1543,
					firstname: "Test",
					lastname: "Account",
					profileurl:
						"https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg",
				},
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
			roomName: "Studying Room",

			meetingID: "ADQ88UFO9XU",
			members: 6,
			joinStatus: "False",
			males: 10,
			females: 10,
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
