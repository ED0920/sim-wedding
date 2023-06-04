import React from "react";

const navStyle = {
  display: "flex",
  fontFamily: "Playfair Display",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  flexDirection: "row",
  paddingTop: "5%",
};

const Nav = () => {
  return (
    <div style={navStyle}>
      <h3>Wedding Itinerary</h3>
      <h3>Sikh Wedding Guide</h3>
      <h3>Invitations</h3>
    </div>
  );
};

export default Nav;
