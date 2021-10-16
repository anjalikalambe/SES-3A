import React, { useState } from 'react';
import './LoginPage.css';
import Header from "../../components/Header";
import axios from 'axios';
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/helpers/UseStore";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const {
    userAuth,
  } = useStore();
  const history = useHistory();

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const clearState = () => {
    setState({
      email: "",
      password: ""
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(state);

    try {
      let response = await axios.post("http://localhost:5000/user/login", {
        email: state.email,
        password: state.password,
      });
      console.log(response.data);

      //Register the login in MobX's persisted state
      //Lets user refresh page and maintain auth state
      if (response.data.success) {
        userAuth.login({
          token: response.data.token,
          username: response.data.username,
        }, () => {
          history.push('/rooms');
        })
      }
    } catch (e) {
      console.log(e);
    }
  };

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
                  setState({ ...state, email: e.target.value })
                }>
                </input>
              </div>
              <div class="form-group">
                <input type="password" id="password" name="password" placeholder="Password" required onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }>
                </input>
              </div>
              <div class="form-group">
                <a href="#" target="_blank">Forgot password?</a>
              </div>
              <div class="form-group">
                <button type="submit" form="login" value="Submit" onClick={handleLogin}>Sign in</button>
              </div>
            </form>
          </div>

        </div>
      </div>
  );
};

export default observer(LoginPage);