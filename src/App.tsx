import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/card";
import './styles/general.css';
import Profile from "./components/profile";
import profileImage from './images/image-jeremy.png';
function App() {
    const [currentMode, setCurrentMode] = useState(0);
    return (
   <div className="mainBox">
       <Profile currentMode={currentMode} setCurrentMode={setCurrentMode} imagePath={ profileImage } firstName={"Jeremy"} lastName={"Robinson"}/>
       <div className="CardGrid">
       <Card currentMode={currentMode} title={"Work"}           hours={["3","22","33"]}         lastInfo={["5","10","40"]}      colorType="work"/>
       <Card currentMode={currentMode} title={"Play"}           hours={["5","12","40"]}         lastInfo={["5","15","30"]}      colorType="play"/>
       <Card currentMode={currentMode} title={"Study"}          hours={["6","10","22"]}         lastInfo={["1","16","30"]}      colorType="study"/>
       <Card currentMode={currentMode} title={"Exercise"}       hours={["2","8","40"]}          lastInfo={["2","18","40"]}      colorType="exercise"/>
       <Card currentMode={currentMode} title={"Social"}         hours={["3","22","30"]}         lastInfo={["3","15","22"]}      colorType="social"/>
       <Card currentMode={currentMode} title={"Self-Care"}      hours={["4","10","50"]}         lastInfo={["4","10","30"]}      colorType="selfcare"/>
       </div>
   </div>
  );
}

export default App;
