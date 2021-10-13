import React, { Component } from 'react';
import './LoginPage.css';
import Header from "../../components/Header";
import axios from 'axios';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    this.clearState();
  }

  handleLogin = async (e) => {
    console.log(this.state);
    e.preventDefault();

    try {
      let response = await axios.post("http://localhost:5000/user/login", {
        email: this.state.email,
        password: this.state.password,
      });
      console.log(response.data.message);
    } catch (e) {
      console.log(e);
    }
  };

  clearState = () => {
    this.setState({
      email: "",
      password: ""
    });
  };


  render() {
    return (
      <div class="LoginPage">
        <Header />

        <div class="login-container">
          <div class="login-box">
            <form id="login">
              <div class="form-group">
                <h1>Sign in</h1>
              </div>
              <div class="form-group">
                <input type="text" id="email" name="email" placeholder="Email" onChange={(e) =>
                  this.setState({ email: e.target.value })
                }>
                </input>
              </div>
              <div class="form-group">
                <input type="password" id="password" name="password" placeholder="Password" required onChange={(e) =>
                  this.setState({ password: e.target.value })
                }>
                </input>
              </div>
              <div class="form-group">
                <a href="#" target="_blank">Forgot password?</a>
              </div>
              <div class="form-group">
                <button type="submit" form="login" value="Submit" onClick={this.handleLogin}>Sign in</button>
              </div>
            </form>
          </div>

        </div>
      </div>

    );
  }
}

export default LoginPage;