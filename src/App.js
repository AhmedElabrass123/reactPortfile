import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMicrophone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Overview from "./components/overview/Overview";
import overViewData from "./components/overview/OverviewData";
import Speakers from "./components/creativeSpeakers/Speakers";
import SpeakersData from "./components/creativeSpeakers/SpeakersData";
import Programs from "./components/Programs/Programs";
import ProgramsData from "./components/Programs/ProgramsData";
import Sponser from "./components/OurSponser/Sponser";
import SponserData from "./components/OurSponser/SponserData";
import Home from "./Pages/Home";
import About from "./components/About/About";
import Head from "./components/head/Head";
import Watch from "./components/Watch/Watch";
import Slider from "./components/creativeSpeakers/Slider";
import MyForm from "./components/form/MyForm";
import MyAccordion from "./components/accordion/MyAccordion";
import Venue from "./components/venue/Venue";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Overview />
      <Watch />
      <Speakers />
      <MyForm />
      <Programs />
      <MyAccordion />
      <Venue />
      <Sponser />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
