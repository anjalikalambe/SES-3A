import React, { Component } from 'react';
import './RegistrationPage.css';
import Header from "../../components/Header";
import axios from 'axios';

class RegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      age: 0,
      location: '',
      password: '',
      confirmPassword: '',
      gender: ''
    }
  }

  componentDidMount() {
    this.clearState();
  }

  handleRegistration = async (e) => {
    e.preventDefault();

    if (this.state.confirmPassword === this.state.password) {
      try {
        let response = await axios.post("http://localhost:5000/user/register", {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          age: parseInt(this.state.age),
          gender: this.state.gender,
          location: this.state.location,
          email: this.state.email,
          password: this.state.password
        });
        console.log(response.data.message);
      } catch (e) {
        console.log(e);
        console.log(e.response.data.message);
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
                  this.setState({ ...this.state, firstName: e.target.value })}>
                </input>

                <input type="text" id="lastName" name="lastname" placeholder="Last Name" required onChange={(e) =>
                  this.setState({ ...this.state, lastName: e.target.value })}>
                </input>
              </div>
              <div class="form-group">
                <input type="text" id="email" name="email" placeholder="Your email adress" required onChange={(e) =>
                  this.setState({ ...this.state, email: e.target.value })}>
                </input>
              </div>
              <div class="form-group">
                <div class="column-group">
                  <label for="age">Age</label>
                  <input type="number" id="age" name="age" min="18" max="100" onChange={(e) =>
                    this.setState({ ...this.state, age: e.target.value })}>
                  </input>
                </div>

                <div class="column-group">
                  <label for="gender">Gender</label>
                  <select name="gender" id="gender" placeholder="select" onChange={(e) =>
                    this.setState({ ...this.state, gender: e.target.value })}>
                    <option>--Select--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <div class="column-group">
                  <label for="country">Country of residence</label>
                  <input type="text" id="location" name="country" placeholder="Your country of residence" onChange={(e) =>
                    this.setState({ ...this.state, location: e.target.value })}>
                  </input>
                </div>
              </div>
              <div class="form-group">
                <input type="password" id="password" name="password" placeholder="Enter password" required onChange={(e) =>
                  this.setState({ ...this.state, password: e.target.value })}>
                </input>


                <input type="password" id="confirmPassword" name="confirmpassword" placeholder="Confirm password" required onChange={(e) =>
                  this.setState({ ...this.state, confirmPassword: e.target.value })}>
                </input>
              </div>
              <div class="form-group">
                <button form="signup" value="Submit" onClick={this.handleRegistration}>Create account</button>
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