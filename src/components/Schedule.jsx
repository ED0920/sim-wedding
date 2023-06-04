import React from "react";

const Display = {
  background: "#FFFBFA",
  color: "#B2648B",
  Height: "100vh",
  margin: "10% 0% 0% 0%",
};
const container = {
  display: "grid",
  gridTemplateColumns: " 1fr 1fr",
};
const EventName = {
  fontFamily: "Snell Roundhand",
  fontWeight: "900",
  fontSize: "38px",
};
const Date = {
  fontFamily: "Playfair Display",
  fontWeight: "600",
};
const ItemA = {
  textAlign: "right",
  margin: "0% 10% 0% 10%",
};
const ItemB = {
  textAlign: "left",
  margin: "0% 10% 0% 0%",
  gridColumn: "2/2",
};

const ItemC = {
  textAlign: "right",
  margin: "0% 10% 0% 10%",
  gridColumn: "1/2",
};
const ItemD = {
  textAlign: "left",
  margin: "0% 10% 0% 0%",
  gridColumn: "2/2",
};

const Spacer = ({ y = 10, x = 0 }) => {
  return <div style={{ height: y, width: x }}></div>;
};
const Event = ({ event, day, time, location, address }) => {
  return (
    <div>
      <div>{event}</div>
      <div>{day}</div>
      <div>{time}</div>
      <div>{location}</div>
      <div>{address}</div>
    </div>
  );
};

const Schedule = () => {
  return (
    <div style={Display}>
      <h1
        style={{
          fontFamily: "Snell Roundhand",
          paddingTop: "10%",
          fontSize: "calc(80px + 2vmin)",
        }}
      >
        Schedule
      </h1>
      <div style={container}>
        <div style={ItemA}>
          <h3 style={EventName}>Mendi</h3>
          <div style={Date}>Wednesday 6th September</div>
          <div>3pm | The Sohi Residence</div>
          {/* <div>{location}</div> */}
          <div>23 Clarence Cres, Coffs Harbour </div>
        </div>
        <Spacer />
        <div style={ItemB}>
          <h3 style={EventName}>Maiyaan</h3>
          <div style={Date}>Thursday 7th September</div>
          <div>10am | The Sohi Residence</div>
          {/* <div>{location}</div> */}
          <div>23 Clarence Cres, Coffs Harbour </div>
          <Spacer />
          <h3 style={EventName}>Ladies Sangeet</h3>
          <div style={Date}>Thursday 7th September</div>
          <div>6pm | Coffs Harbour Race Course</div>
          {/* <div>{location}</div> */}
          <div>62 Howard St, Coffs Harbour NSW 2450 </div>
        </div>
        <Spacer />
        <div style={ItemC}>
          <h3 style={EventName}>Choora Ceremony</h3>
          <div style={Date}>Friday 8th September</div>
          <div>5pm | The Sohi Residence</div>
          {/* <div>{location}</div> */}
          <div>23 Clarence Cres, Coffs Harbour </div>
          <Spacer />
          <h3 style={EventName}>Jaggo</h3>
          <div style={Date}>Friday 8th September</div>
          <div>7pm | The Sohi Residence</div>
          {/* <div>{location}</div> */}
          <div>23 Clarence Cres, Coffs Harbour</div>
        </div>
        <Spacer />
        <div style={ItemD}>
          <h3 style={EventName}>Anand Kara</h3>
          <div style={Date}>Saturday 9th September</div>
          <div>9am | Guru Nanak Sikh Gurudwarae</div>
          {/* <div>{location}</div> */}
          <div>River St, Woolgoolga NSW 2456</div>
          <h5>9am | Milni</h5>
          <h5>10am | MORNING TEA</h5>
          <h5>10:30AM | ANAND KARAJ</h5>
          <Spacer />
          <h3 style={EventName}>Reception</h3>
          <div>1:30pm | C.EX COFFS</div>
          {/* <div>{location}</div> */}
          <div>2-6 Vernon st, Coffs Harbour NSW 2450</div>
          <Spacer />
          <h3 style={EventName}>Doli</h3>
          <div>7pm | The Sohi Residence</div>
          {/* <div>{location}</div> */}
          <div>23 Clarence Crescent, Coffs Harbour NSW 2450</div>
        </div>
      </div>
      <h5 style={{ padding: "25px ,25px, 50px, 25px" }}>BACK TO TOP</h5>
    </div>
  );
};

export default Schedule;
