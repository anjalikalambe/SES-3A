import React, { Component } from 'react';
import './RegistrationPage.css';
import Header from "./components/Header";

class RegistrationPage extends Component {
    state = {users: []};
  
    componentDidMount() {
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }
  
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
                <input type="text" id="firstname" name="firstname" placeholder="First Name">
            </input>
            </div>
            <div class="form-group"> 
                <input type="text" id="lastname" name="lastname" placeholder="Last Name">
            </input>
            </div>
            <div class="form-group"> 
                <input type="text" id="email" name="email" placeholder="Your email adress">
            </input>
              </div>
            <div class="form-group"> 
          <label for="age">Age</label>
          <input type="number" id="age" name="age" min="18" max="100">
          </input>
         </div>
         <div class="form-group"> 
        <button type="submit" form="login" value="Submit">Sign up</button>
         </div>

       </form>
                </div>
               
           </div>
       </div>
      
      );
    }
  }

  export default RegistrationPage;