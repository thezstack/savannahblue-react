import React, { Component } from 'react';
import media from '/Users/zubi/Documents/savannahblue/src/media/savannahBlue_reduced.png';
function About () {
  return (
    <div className="main">

        <h1>Savannah <span className="blue">Blue</span></h1>

      <div className="buttongrid">
          <div className="nested">
          <div className="subtitle">Arts & Outreach</div>
          <div className="nested2">
            <button className="button1"> programs</button>
            <button className="button1"> events</button>
          </div>
            </div>
          </div>
      <style jsx>{`

        .subtitle{
          color:white;
          font-family: bebas;
          font-size: 2.5em;
        }
        .buttongrid{
          display: grid;
          grid-template-columns:1fr 1fr;
          margin-left:10%;
        }
        .nested{
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 2em;
        }
        .nested2{
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap:1em;
        }




        h1{
          font-size:6em;
          font-family: 'Bebas', sans-serif;
          color:white;
          padding-top:20%;
          margin-left:10%;
          margin-top:0%;

        }
        .main {
          height:100vh;
          margin-top:0%;
          background-color:black;
          background-repeat: no-repeat;
          background-position: bottom right;
          background-image: url(${media});

      }

        .blue{
          color: #4169e1;

        }

        .button1{
          font-family: 'Poppins', sans-serif;
          text-align: center;
          font-size: 1em;
          border-radius: 3px;
          border: 1px solid white;
          background-color:black;
          color:white;
          -webkit-transition-duration: 0.1s; /* Safari */
          transition-duration: 0.1s;
          padding: 5px;
        }

        .button1:hover {
          background-color: white;
          color: black;
      }


      `}</style>
    </div>

)
  }


export default About
