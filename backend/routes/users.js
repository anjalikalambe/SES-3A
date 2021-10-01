const router = require('express').Router();
const usersController = require('../controllers/user');

router
    .route('/register')
    .post(usersController.register);

router
    .route('/login')
    .post(usersController.login)
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.json([
		{
			firstname: "Zachary",
			lastname: "Travis",
			id: 0,
			location: "Croatia",
		},
		{
			firstname: "Fletcher",
			lastname: "Wilder",
			id: 1,
			location: "Gibraltar",
		},
		{
			firstname: "Xander",
			lastname: "Newton",
			id: 2,
			location: "Tonga",
		},
		{
			firstname: "Devin",
			lastname: "Williams",
			id: 3,
			location: "Hungary",
		},
		{
			firstname: "Elvis",
			lastname: "Roberson",
			id: 4,
			location: "Chile",
		},
		{
			firstname: "Buckminster",
			lastname: "Tucker",
			id: 5,
			location: "Panama",
		},
		{
			firstname: "Tad",
			lastname: "Cross",
			id: 6,
			location: "Guernsey",
		},
		{
			firstname: "Aaron",
			lastname: "Boyle",
			id: 7,
			location: "Malta",
		},
		{
			firstname: "Jasper",
			lastname: "Hicks",
			id: 8,
			location: "Saint Martin",
		},
		{
			firstname: "Thaddeus",
			lastname: "Blevins",
			id: 9,
			location: "France",
		},
		{
			firstname: "Ashton",
			lastname: "Roberson",
			id: 10,
			location: "Virgin Islands, British",
		},
	]);
});

module.exports = router;
