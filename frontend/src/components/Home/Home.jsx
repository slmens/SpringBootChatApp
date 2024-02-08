/* eslint-disable react/prop-types */
import "./Home.css";
import LeftSide from "./LeftSide/LeftSide.jsx";
import RigthSide from "./RigthSide/RigthSide.jsx";

function Home() {
  return (
    <div id="homeContainer">
      <LeftSide />
      <RigthSide />
    </div>
  );
}

export default Home;
