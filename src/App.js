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
          <Mailinglist />
          <style jsx global>{`

            `}</style>
        </div>

    );
  }
}

export default App;
