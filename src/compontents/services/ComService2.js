import React from "react";
import { NavLink } from "react-router-dom";

// import imgservice2 from "../../images/services/service2.jpg";

const ComService2 = () => {
    return (
        <>
            <div className="services" id="services">
                <div className="container">
                    <div className="content compontent">
                        <div className="cont" id="ser2">
                            <div className="left">
                                <h3>
                                    <NavLink to="/Service2">
                                        Discharge English and Arabic to
                                        WordPress
                                    </NavLink>
                                </h3>

                                <div className="info">
                                    <div className="box">
                                        <span>
                                            We will discharge e-books to a
                                            highly accurate Word file
                                        </span>
                                    </div>
                                </div>
                                {/* <NavLink to="/Service2">more</NavLink> */}
                            </div>
                            <div className="right">
                                <img
                                    src="images/services/service2.jpg"
                                    alt="images/services/service2.jpg"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComService2;
