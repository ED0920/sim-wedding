import React from "react";
import Nav from "../components/Nav";
import Parent from "../components/Parent";
import Schedule from "../components/Schedule";

const display = {
  height: "100vh",
  backgroundImage: 'url("../assets/example.jpeg")',
  background: "#FFFBFA",
  color: "#B2648B",
  padding: "5%",
};
const name = {
  // marginTop: "30%",
  marginBottom: "0%",
  fontFamily: "Snell Roundhand",
  fontSize: "calc(100px + 2vmin)",
};
function Landing() {
  return (
    <div>
      <div style={display}>
        <Nav />
        <div>
          <h1 style={name}>Sim & Ricky</h1>
        </div>
      </div>
      <Parent />
      <Schedule />
    </div>
  );
}

export default Landing;
