import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

// import avatar from "../../images/landing/avatar.png";

const Landing = () => {
    return (
        <>
            <div className="landing ">
                <div className="container">
                    <div className="left">
                        <div className="box">
                            <div className="content">
                                {/* <img src={avatar} loading="lazy" alt="user3" /> */}
                                <img
                                    src="images/landing/avatar.png"
                                    loading="lazy"
                                    alt="user3"
                                />
                                <h2>
                                    someone famous
                                    <span>graphic desgin</span>
                                </h2>
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    title="Contact"
                                >
                                    Hire me
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <h2>
                            ahmed el sayed read in the filed of graphic desgin
                            discharge books to maicrosoft word
                        </h2>

                        <p>learn about our services and join us today</p>

                        <div className="btn">
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                title="Contact"
                            >
                                start now
                            </Link>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                title="About"
                            >
                                learn more
                            </Link>
                        </div>

                        <ul className="social">
                            <li>
                                <a href="#" title="Facebook">
                                    <FaFacebookF className="i" />
                                </a>
                            </li>

                            <li>
                                <a href="#" title="Twitter">
                                    <FaTwitter className="i" />
                                </a>
                            </li>
                        </ul>

                        <p>
                            we estimate some major brands in the world with its
                            services
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;
