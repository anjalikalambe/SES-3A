const User = require("../models/User");


module.exports = {//function to verify token from client to then protect frontend routes. 
    register: function (req, res) {
        const password = req.body.password;
        const name = req.body.name;
        const email = req.body.email;
        const description = req.body.description;

        user.findOne({ userid: userid })
            .then(user => {
                if (user) {
                    return res.status(400).json({
                        success: false,
                        message: "Username already exists"
                    });

                } else {
                    //if user with that username doesnt exist then create a new user
                    const newUser = new User({
                        password,
                        name,
                        email,
                        description
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
        const username = req.body.username;
        const password = req.body.password;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        User.findOne({ username: username })
            .then(user => {
                if (!user) {
                    return res.status(404).json({
                        success: false,
                        message: "Your username and/or password do not match"
                    });
                }
                else {
                    res.json({
                        success: true,
                        message: "Logged in"
                    });
                }
            })
            .catch(e => {
                return res.status(404).json({
                    success: false,
                    message: "Your username doesnt exist",
                    err: 'error'
                });
            })
    }
}
