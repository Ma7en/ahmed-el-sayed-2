import React, { useState } from "react";
import { FaHeart, FaHeartbeat } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// import aboutImg from "../../images/about/about.png";

const Aboutus = () => {
    const [heart, setHeart] = useState(false);
    // const [heart, setHeart] = useState(false);
    // useEffect(() => {
    //     fetch("http://localhost:3002/aboutus")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log();
    //         });
    // }, []);
    return (
        <>
            <div className="about none" id="about">
                <div className="container">
                    <div className="row">
                        <div className="img">
                            {/* <img src={aboutImg} loading="lazy" alt="about" /> */}
                            <img
                                src="images/about/about.png"
                                loading="lazy"
                                alt="about"
                            />
                        </div>

                        <div className="card">
                            <div className="name">
                                <h2>
                                    <NavLink to="/About">Ahmed ElSayed</NavLink>
                                </h2>
                                <p>Graphic Desgin</p>
                            </div>

                            <div className="job">
                                <div className="key">
                                    <span>Graphic Desgin</span>
                                </div>

                                <div className="key">
                                    <span>experience 4 years</span>
                                </div>

                                <div className="key">
                                    <span>i work fry lancer</span>
                                </div>

                                <div className="key">
                                    <span>i write books</span>
                                </div>

                                <div className="key">
                                    <span>dump PDF files to word</span>
                                </div>

                                <div className="key">
                                    <span>master{"'"}s messages</span>
                                </div>
                            </div>

                            <div className="icon">
                                <span>+{heart ? "1" : "0"}</span>
                                {!heart && (
                                    <FaHeart
                                        onClick={() => {
                                            setHeart(!heart);
                                        }}
                                        className="i"
                                    />
                                )}
                                {heart && (
                                    <FaHeartbeat
                                        onClick={() => {
                                            setHeart(!heart);
                                        }}
                                        className="ibeat"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="spikes" /> */}
        </>
    );
};

export default Aboutus;
