import React, { Component } from 'react';
import './RegistrationPage.css';
import Header from "../../components/Header";
import axios from 'axios';

class RegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        age: null,
        location: '',
        password: '',
        confirmPassword: ''
      }
    }
  }

  componentDidMount() {
    this.clearState();
  }

  handleRegistration = async (e) => {
    console.log(this.state.user);

    if (this.state.user.confirmPassword === this.state.user.password) {
      try {
        let response = await axios.post("http://localhost:5000/user/register", {
          firstName: this.state.user.firstName,
          lastName: this.state.user.lastName,
          age: this.state.user.age,
          location: this.state.user.location,
          email: this.state.user.email,
          password: this.state.user.password,
        });
        console.log(response.data.message);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Passwords don't match");
    }
  };

  clearState = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      age: null,
      gender: '',
      location: '',
      password: '',
      confirmPassword: ''
    });
  };

  render() {
    return (
      <div class="RegistrationPage">
        <Header />

        <div class="signup-container">
          <div class="signup-box">
            <form id="signup">
              <div class="form-group">
                <h1>Sign up</h1>
              </div>
              <div class="form-group">
                <input type="text" id="firstName" name="firstname" placeholder="First Name" required onChange={(e) =>
                  this.setState({ firstName: e.target.value })}>
                </input>

                <input type="text" id="lastName" name="lastname" placeholder="Last Name" required onChange={(e) =>
                  this.setState({ lastName: e.target.value })}>
                </input>
              </div>
              <div class="form-group">
                <input type="text" id="email" name="email" placeholder="Your email adress" required onChange={(e) =>
                  this.setState({ email: e.target.value })}>
                </input>
              </div>
              <div class="form-group">
                <div class="column-group">
                  <label for="age">Age</label>
                  <input type="number" id="age" name="age" min="18" max="100" onChange={(e) =>
                  this.setState({ age: e.target.value })}>
                  </input>
                </div>

                <div class="column-group">
                  <label for="gender">Gender</label>
                  <select name="gender" id="gender" onChange={(e) =>
                  this.setState({ gender: e.target.value })}>
                    <option value="male">Male</option>
                    <option value="male">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <div class="column-group">
                  <label for="country">Country of residence</label>
                  <input type="text" id="location" name="country" placeholder="Your country of residence" onChange={(e) =>
                  this.setState({ location: e.target.value })}>
                  </input>
                </div>
              </div>
              <div class="form-group">
                <input type="password" id="password" name="password" placeholder="Enter password" required onChange={(e) =>
                  this.setState({ password: e.target.value })}>
                </input>


                <input type="password" id="confirmPassword" name="confirmpassword" placeholder="Confirm password" required onChange={(e) =>
                  this.setState({ confirmPassword: e.target.value })}>
                </input>
              </div>
              <div class="form-group">
                <button type="submit" form="signup" value="Submit" onClick={this.handleRegistration}>Create account</button>
              </div>
              <div class="form-group">
                <p>Have an account?<a href="/"> Log in here</a></p>
              </div>


            </form>
          </div>

        </div>
      </div>

    );
  }
}

export default RegistrationPage;