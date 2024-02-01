/* eslint-disable react/prop-types */

// import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// import ComService1 from "./ComService1";
// import ComService2 from "./ComService2";
// import ComService3 from "./ComService3";
// import ComService4 from "./ComService4";

// import imgservice1 from "../../images/services/service1.jpg";
// import imgservice2 from "../../images/services/service2.jpg";
// import imgservice3 from "../../images/services/service3.jpg";
// import imgservice4 from "../../images/services/service4.jpg";
// import { data, error } from "jquery";

const ServicesCom = ({ address }) => {
    // const [services, setServices] = useState(null);
    // const [isWaiting, setIsWaiting] = useState(true);
    // const [serverError, setServerError] = useState(null);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("http://localhost:3002/services")
    //             .then((response) => {
    //                 if (!response.ok) {
    //                     throw Error("Can Not Coonect To the Server!");
    //                 }
    //                 return response.json();
    //             })
    //             .then((data) => {
    //                 setServices(data);
    //                 setIsWaiting(false);
    //             })
    //             .catch((error) => {
    //                 setServerError(error.message);
    //                 setIsWaiting(false);
    //             });
    //     }, 1000);
    // }, []);

    return (
        <>
            <div className="services" id="services">
                <div className="container">
                    {address && (
                        <div className="main-title">
                            <h2>
                                <Link to="/Services">services</Link>
                            </h2>
                            <p>
                                we have long experience in our field, so we can
                                provide excellent services to you.
                            </p>
                        </div>
                    )}

                    <div className="content">
                        <div className="cont" id="ser1">
                            <div className="left">
                                <h3>
                                    <NavLink to="/Service1">
                                        Dump PDF Files To Word
                                    </NavLink>
                                </h3>

                                <div className="info">
                                    <div className="box">
                                        <span>
                                            Write 10 Arabic Language Pages (Page
                                            250 Words)
                                        </span>
                                    </div>
                                </div>

                                <NavLink to="/Service1">more</NavLink>
                            </div>
                            <div className="right">
                                <img
                                    src="images/services/service1.jpg"
                                    loading="lazy"
                                    alt="images/services/service1.jpg"
                                />
                            </div>
                        </div>

                        <div className="cont" id="ser2">
                            <div className="left">
                                <h3>
                                    <NavLink to="/Service2">
                                        Discharge English And Arabic To
                                        WordPress
                                    </NavLink>
                                </h3>

                                <div className="info">
                                    <div className="box">
                                        <span>
                                            We Will Discharge E-Books To A
                                            Highly Accurate Word File
                                        </span>
                                    </div>
                                </div>

                                <NavLink to="/Service2">more</NavLink>
                            </div>
                            <div className="right">
                                <img
                                    src="images/services/service2.jpg"
                                    loading="lazy"
                                    alt="images/services/service2.jpg"
                                />
                            </div>
                        </div>

                        <div className="cont" id="ser3">
                            <div className="left">
                                <h3>
                                    <NavLink to="/Service3">
                                        Design Of Banznis Card
                                    </NavLink>
                                </h3>

                                <div className="info">
                                    <div className="box">
                                        <span>
                                            Peace Be Upon You (((Please Read The
                                            Full Description)))) I Offer You In
                                            This Service
                                        </span>
                                    </div>
                                </div>

                                <NavLink to="/Service3">more</NavLink>
                            </div>
                            <div className="right">
                                <img
                                    src="images/services/service3.jpg"
                                    loading="lazy"
                                    alt="images/services/service3.jpg"
                                />
                            </div>
                        </div>

                        <div className="cont" id="ser4">
                            <div className="left">
                                <h3>
                                    <NavLink to="/Service4">
                                        Design Of Transmitters
                                    </NavLink>
                                </h3>

                                <div className="info">
                                    <div className="box">
                                        <span>
                                            ((Design Letter Head Or
                                            Correspondence + Your Card Or Your
                                            Company))
                                        </span>
                                    </div>
                                </div>

                                <NavLink to="/Service4">more</NavLink>
                            </div>
                            <div className="right">
                                <img
                                    src="images/services/service4.jpg"
                                    loading="lazy"
                                    alt="images/services/service4.jpg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="spikes" /> */}
        </>
    );
};

export default ServicesCom;
