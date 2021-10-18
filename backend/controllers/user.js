const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

module.exports = { 
    register: function (req, res) {
        console.log(req.body);
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const age = req.body.age;
        const gender = req.body.gender;
        const location = req.body.location;
        const password = req.body.password;

        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    return res.status(400).json({
                        success: false,
                        message: "Username already exists"
                    });

                } else {
                    //if user with that username doesnt exist then create a new user
                    const newUser = new User({
                        firstName,
                        lastName,
                        email,
                        age,
                        gender,
                        location,
                        password,

                    });
                    //save user to collection
                    newUser.save()
                        .then((user) => {
                            res.json({
                                success: true,
                                message: "User successfully created"
                            });
                        })
                        .catch(err => res.status(400).json({
                            success: false,
                            message: "User could not be created",
                            err: err
                        }));

                }
            })

    },
    login: function (req, res) {
        const email = req.body.email;
        const password = req.body.password;

        if (email === ""|| password==="") {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        User.findOne({ email: email })
            .then(user => {
                if (!user) {
                    return res.status(404).json({
                        success: false,
                        message: "Your username and/or password do not match"
                    });
                }
                else {
                    bcrypt.compare(password, user.password)
                        .then(isMatch => {
                            if (isMatch) {
                                const payload = {
                                    id: user.id,
                                    email: user.email
                                }
                                jwt.sign(
                                    payload,
                                    process.env.USERSECRET,
                                    { expiresIn: 604800 },
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            email: user.email,
                                            token: "Bearer " + token,
                                            message: "Successful login!"
                                        });
                                    }
                                );
                            } else {
                                res.status(400).json({
                                    success: false,
                                    message: "incorrect password"
                                });
                            }
                        });
                }
            })
            .catch(e => {
                return res.status(404).json({
                    success: false,
                    message: "This email doesn't exist",
                    err: 'error'
                });
            })
    },
    verifyToken: function (req, res) {
        const authorization = req.headers.authorization;
        if (authorization && authorization.split(' ')[0] === 'Bearer') {
            // use jwt verify to check the token passsed through in position 1 of array made using split.

            const token = req.headers.authorization.split(' ')[2];
            jwt.verify(token, process.env.USERSECRET, (err, decoded) => {
                if (err) {
                    res.json({
                        success: false,
                        message: "Unauthorised"
                    });
                } else {
                    res.json({
                        success: true,
                        message: "Authorised"
                    });
                }
            })
        } else {
            res.json({
                success: false,
                message: "No token provided"
            });
        } 
    }
}
