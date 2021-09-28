import React from "react";
import "./App.css";
import HeroSectionComp from "./components/heroSection/HeroSectionComp";
import FirstSectionComp from "./components/firstSection/FirstSectionComp";
import SecondSectionComp from "./components/secondSection/SecondSectionComp";
import ThirdSectionComp from "./components/thirdSection/ThirdSectionComp";
import FourthSectionComp from "./components/fourthSection/FourthSectionComp";
import FifthSectionComp from "./components/fifthSection/FifthSectionComp";
import SixthSectionComp from "./components/sixthSection/SixthSectionComp";
import SeventhSectionComp from "./components/seventhSection/SeventhSectionComp";
import EighthSectionComp from "./components/eighthSection/EighthSectionComp";
import FooterComp from "./components/footer/FooterComp";

const App = () => {
  return (
    <div className="root">
      <HeroSectionComp />
      <FirstSectionComp />
      <div className="white-pattern-bg">
        <SecondSectionComp />
        <ThirdSectionComp />
        <FourthSectionComp />
        <FifthSectionComp />
        <SixthSectionComp />
      </div>
      {/* <SeventhSectionComp />
      <EighthSectionComp />
      <FooterComp />  */}
    </div>
  );
};

export default App;
