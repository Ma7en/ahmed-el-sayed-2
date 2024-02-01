import React from "react";
import { NavLink } from "react-router-dom";

// import imgservice1 from "../../images/services/service1.jpg";

const ComService1 = () => {
    return (
        <>
            <div className="services" id="services">
                <div className="container">
                    <div className="content compontent">
                        <div className="cont" id="ser1">
                            <div className="left">
                                <h3>
                                    <NavLink to="/Service1">
                                        Dump PDF files to Word
                                    </NavLink>
                                </h3>

                                <div className="info">
                                    <div className="box">
                                        <span>
                                            Write 10 Arabic Language Pages (page
                                            250 words)
                                        </span>
                                    </div>
                                </div>
                                {/* <NavLink to="/Service1">more</NavLink> */}
                            </div>
                            <div className="right">
                                <img
                                    src="images/services/service1.jpg"
                                    alt="images/services/service1.jpg"
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

export default ComService1;
