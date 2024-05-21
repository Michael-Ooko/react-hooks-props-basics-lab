import React from "react";
import Links from "./Links"; // Make sure to import the Links component

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.trim() !== "" && <p>{props.bio}</p>}  {/* Conditionally render the bio */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* Pass the links props to the Links component */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
