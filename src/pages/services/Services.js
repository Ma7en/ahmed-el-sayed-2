import React from "react";

import Address from "../../compontents/global/Address";
import Ads from "../../compontents/global/Ads";
import Contact from "../../compontents/global/Contact";
import Footer from "../../compontents/global/Footer";
import Goicon from "../../compontents/global/Goicon";
import Header from "../../compontents/global/Header";
import ServicesCom from "../../compontents/services/ServicesCom";

const Services = () => {
    // const addFasle = false;
    const titlePage = "Services";
    const descriptionPage = `We Have Long 
        Experience In 
        Our Field, So We Can Provide 
        Excellent Services To You.`;
    return (
        <>
            <Goicon />
            <Header />
            <Address titlePage={titlePage} descriptionPage={descriptionPage} />
            <ServicesCom address={false} />
            <Ads />
            <Contact />
            <Footer />
        </>
    );
};

export default Services;
