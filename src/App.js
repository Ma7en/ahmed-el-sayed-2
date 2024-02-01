import React from "react";

// import "normalize.css";
import "./css/style.scss";

import Goicon from "./compontents/global/Goicon";
import Header from "./compontents/global/Header";
import Landing from "./compontents/public/Landing";
import Aboutus from "./compontents/public/Aboutus";
import ServicesCom from "./compontents/services/ServicesCom";
import Ads from "./compontents/global/Ads";
import Contact from "./compontents/global/Contact";
import Footer from "./compontents/global/Footer";
import Materials from "./compontents/materials/MaterialsCom";

function App() {
    return (
        <>
            <Goicon />
            <Header />
            <Landing />
            <Aboutus />
            <ServicesCom address={true} />
            <Ads />
            <Materials address={true} />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
