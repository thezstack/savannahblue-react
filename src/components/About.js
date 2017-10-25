import React, { Component } from 'react';
import media from '/Users/zubi/Documents/savannahblue/src/media/savannahBlue_reduced.png';

function About () {
  return (
    <div className="grid">

      <h1>Savannah <span className="blue">Blue</span></h1>
      <p> Arts & Outreach </p>
      <button className="button"> Click me</button>
      <style jsx>{`
        p {
          color:white;
          font-family: Bebas;
          padding-left: 10%;
          font-size: 2em;
        }
        h1{
          font-size:4em;
          font-family: Bebas;
          color:white;
          padding-top:20%;
          padding-left:10%;
          margin-top:0%;

        }
        .grid {
          height:100vh;
          margin-top:0%;
          background-image: url(${media});
          background-color:black;
          background-repeat: no-repeat;
          background-position: bottom right;
      }

        .blue{
          color: #4169e1;

        }

        .button{
          margin-left:20%;

        }

      `}</style>
    </div>

)
  }


export default About
