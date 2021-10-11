import React, { Component } from 'react';
import './RegistrationPage.css';

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

           <div class="signup-container">
            <div class="signup-box">
                <form id="signup">
                <div class="form-group">
                <h1>Sign up</h1>
                </div>
                <div class="form-group"> 
                <input type="text" id="firstname" name="firstname" placeholder="First Name" required>
            </input>

                <input type="text" id="lastname" name="lastname" placeholder="Last Name" required>
            </input>
            </div>
            <div class="form-group"> 
                <input type="text" id="email" name="email" placeholder="Your email adress" required> 
            </input>
              </div>
            <div class="form-group">
            <div class="column-group">
          <label for="age">Age</label>
          <input type="number" id="age" name="age" min="18" max="100">
          </input>
          </div>
        
          <div class="column-group">
          <label for="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="male">Female</option>
            <option value="Other">Other</option>
          </select>
          </div>
         </div>
         <div class="form-group"> 
         <div class="column-group">
              <label for="country">Country of residence</label>
               <input type="text" id="country" name="country" placeholder="Your country of residence" >
            </input>
            </div>
            </div>
         <div class="form-group">
         <input type="password" id="password" name="password" placeholder="Enter password" required>
          </input>
    
      
         <input type="confirmpassword" id="confirmpassword" name="confirmpassword" placeholder="Confirm password" required>
          </input>
         </div>
         <div class="form-group"> 
        <button type="submit" form="signup" value="Submit">Create account</button>
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