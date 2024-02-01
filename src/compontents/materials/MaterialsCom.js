/* eslint-disable react/prop-types */
import React from "react";
import { Link, NavLink } from "react-router-dom";

// images
// import Arabic from "../../images/materials/Arabic.png";
// import Mathematics from "../../images/materials/Mathematics.png";
// import English from "../../images/materials/English.png";
// import Science from "../../images/materials/Science.png";
// import Geography from "../../images/materials/Geography.png";
// import Technology from "../../images/materials/Technology.png";

const MaterialsCom = ({ address }) => {
    return (
        <>
            <div className="materials">
                <div className="container">
                    {address && (
                        <div className="main-title">
                            <h2>
                                <Link to="/Materials">Materials</Link>
                            </h2>
                            <p>
                                we have long experience in our field, so we can
                                provide excellent services to you.
                            </p>
                        </div>
                    )}
                    <div className="content">
                        <NavLink to="/Arabic" title="Arabic" className="box">
                            <div className="image">
                                <img
                                    src="images/materials/Arabic.png"
                                    alt="images/materials/Arabic.png"
                                />
                            </div>

                            <div className="text">
                                <h4>Arabic</h4>
                            </div>
                        </NavLink>

                        <NavLink
                            to="/Mathematics"
                            className="box"
                            title="Mathematics"
                        >
                            <div className="image">
                                <img
                                    src="images/materials/Mathematics.png"
                                    alt="images/materials/Mathematics.png"
                                />
                            </div>

                            <div className="text">
                                <h4>Mathematics</h4>
                            </div>
                        </NavLink>

                        <NavLink to="/English" className="box" title="English">
                            <div className="image">
                                <img
                                    src="images/materials/English.png"
                                    alt="images/materials/English.png"
                                />
                            </div>

                            <div className="text">
                                <h4>English</h4>
                            </div>
                        </NavLink>

                        <NavLink to="/Science" className="box" title="Science">
                            <div className="image">
                                <img
                                    src="images/materials/Science.png"
                                    alt="images/materials/Science.png"
                                />
                            </div>

                            <div className="text">
                                <h4>Science</h4>
                            </div>
                        </NavLink>

                        <NavLink
                            to="/Geography"
                            className="box"
                            title="Geography"
                        >
                            <div className="image">
                                <img
                                    src="images/materials/Geography.png"
                                    alt="images/materials/Geography.png"
                                />
                            </div>

                            <div className="text">
                                <h4>Geography</h4>
                            </div>
                        </NavLink>

                        <NavLink
                            to="/Technology"
                            className="box"
                            title="Technology"
                        >
                            <div className="image">
                                <img
                                    src="images/materials/Technology.png"
                                    alt="images/materials/Technology.png"
                                />
                            </div>

                            <div className="text">
                                <h4>Technology</h4>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MaterialsCom;
