import React from "react";

const Footer = () => {
    const newDate = new Date();
    return (
        <>
            <div className="footer">
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>

                <div className="container">
                    <p>
                        All rights reserved to
                        <a href="#"> Mazen Saad </a>
                        <span className="dateYear">
                            {newDate.getFullYear()}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
