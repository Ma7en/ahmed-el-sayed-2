import React from "react";
import { NavLink } from "react-router-dom";

// import imgservice3 from "../../images/services/service3.jpg";

const ComService3 = () => {
    return (
        <>
            <div className="services" id="services">
                <div className="container">
                    <div className="content compontent">
                        <div className="cont" id="ser3">
                            <div className="left">
                                <h3>
                                    <NavLink to="/Service3">
                                        Design of Banznis Card
                                    </NavLink>
                                </h3>
                                <div className="info">
                                    <div className="box">
                                        <span>
                                            (((Please read the full
                                            description))))
                                        </span>
                                    </div>
                                </div>
                                {/* <NavLink to="/Service3">more</NavLink> */}
                            </div>
                            <div className="right">
                                <img
                                    src="images/services/service3.jpg"
                                    alt="images/services/service3.jpg"
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

export default ComService3;
