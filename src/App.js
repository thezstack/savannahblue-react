import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Mailinglist from './components/Mailinglist';


class App extends Component {
  render() {
    return (
        <div className="body">
          <About />
          <style jsx global>{`
            @import url('https://fonts.googleapis.com/css?family=Poppins:300,900');
            body{
              background-color: black;
              height:100%;
            }
            `}</style>
        </div>

    );
  }
}

export default App;
