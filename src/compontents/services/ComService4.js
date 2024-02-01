import React from "react";
import { NavLink } from "react-router-dom";

// import imgservice4 from "../../images/services/service4.jpg";

const ComService4 = () => {
    return (
        <>
            <div className="services" id="services">
                <div className="container">
                    <div className="content compontent">
                        <div className="cont" id="ser4">
                            <div className="left">
                                <h3>
                                    <NavLink to="/Service4">
                                        Design of transmitters
                                    </NavLink>
                                </h3>
                                <div className="info">
                                    <div className="box">
                                        <span>
                                            ((Design Letter Head or
                                            Correspondence + your card or your
                                            company))
                                        </span>
                                    </div>
                                </div>
                                {/* <NavLink to="/Service4">more</NavLink> */}
                            </div>
                            <div className="right">
                                <img
                                    src="images/services/service4.jpg"
                                    alt="images/services/service4.jpg"
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

export default ComService4;
