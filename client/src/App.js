import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Components/Footer/Footer';
import {Container} from "react-bootstrap"
import User from './Components/User/User.js';
import UserState from './Components/UserState/State';

function App() {
  return (
<div className="App">
  <Container className="app">
    <NavBar />
    <User />
    <UserState />
    <Footer />
  </Container>
    
    </div>  
  );
}

export default App;
