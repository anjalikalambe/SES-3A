const User = require("../models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

module.exports = {//function to verify token from client to then protect frontend routes. 
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
                                    username: user.email
                                }
                                jwt.sign(
                                    payload,
                                    process.env.USERSECRET,
                                    { expiresIn: 604800 },
                                    (err, token) => {
                                        res.json({
                                            success: true,
                                            username: user.email,
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
    }
}
