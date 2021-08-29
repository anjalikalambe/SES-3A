import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Container from "@material-ui/core/Container";
import {PurpleButton} from "./components/Buttons";
import {CreamButton} from "./components/Buttons";

class App extends Component {
  state = {users: []};

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="box">
            <div className="text1">
                Welcome to the world of virtual love
            </div>
            <div className="text2">
                Diverge into the the rooms of love and find the right match for you
            </div>
            <Container maxWidth="sm" className="box2">
                <PurpleButton variant="contained" color="primary" >
                    Join a room
                </PurpleButton>
                <CreamButton variant="contained" color="primary" >
                    Sign up
                </CreamButton>
            </Container>
        </div>
      </div>
    );
  }
}

export default App;