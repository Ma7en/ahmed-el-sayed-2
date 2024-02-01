import React from "react";
import Address from "../../compontents/global/Address";
import Ads from "../../compontents/global/Ads";
import Contact from "../../compontents/global/Contact";
import Footer from "../../compontents/global/Footer";
import Goicon from "../../compontents/global/Goicon";
import Header from "../../compontents/global/Header";
import Mathematicsinfo from "../../compontents/materials/Mathematicsinfo";
import Personal from "../../compontents/materials/Personal";

const Mathematics = () => {
    const titlePage = "Mathematics";
    const descriptionPage = `We Have Long 
        Experience In 
        Our Field, So We Can Provide 
        Excellent Services To You.`;

    return (
        <>
            <Goicon />
            <Header />
            <Address titlePage={titlePage} descriptionPage={descriptionPage} />
            <Personal />
            <Mathematicsinfo />
            <Ads />
            <Contact />
            <Footer />
        </>
    );
};

export default Mathematics;
