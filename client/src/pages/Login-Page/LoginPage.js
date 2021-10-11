import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
    state = {users: []};
  
    componentDidMount() {
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }
  
    render() {
      return (
       <div class="LoginPage">

           <div class="login-container">
            <div class="login-box">
                <form id="login">
                <div class="form-group">
                <h1>Sign in</h1>
                </div>
                <div class="form-group"> 
                <input type="text" id="email" name="email" placeholder="Email" >
            </input>
              </div>
              <div class="form-group">
           <input type="password" id="password" name="password" placeholder="Password" required>
         </input>
       </div>
       <div class="form-group">
       <a href="#" target="_blank">Forgot password?</a> 
         </div>
       <div class="form-group">
        <button type="submit" form="login" value="Submit">Sign in</button>
         </div>
       </form>
                </div>
               
           </div>
       </div>
      
      );
    }
  }

  export default LoginPage;