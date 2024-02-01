import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from "react-icons/fa";

//
// import logo from "../../images/header/logo.png";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [navservices, setNavservices] = useState(false);
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavbar(false);
            setNavservices(false);
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);

    return (
        <>
            <header className={sticky ? "header open" : "header"} id="home">
                <div className="container">
                    <Link to="/" className="logo">
                        {/* <img src={logo} loading="lazy" alt="logo" /> */}
                        <img
                            src="images/header/logo.png"
                            loading="lazy"
                            alt="logo"
                        />
                    </Link>

                    {navbar ? (
                        <FaTimes
                            id="toggle-menu"
                            className="fa-times"
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    ) : (
                        <FaBars
                            id="toggle-menu"
                            // {navbar ? "fas fa-bars fa-times" : "fas fa-bars"}
                            className="fa"
                            onClick={() => {
                                setNavbar(!navbar);
                            }}
                        />
                    )}

                    <ul className={navbar ? "nav open" : "nav"}>
                        <li>
                            <NavLink
                                to="/"
                                title="Home"
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                            >
                                home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/About"
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                                title="About"
                            >
                                about us
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/Services"
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                                title="Services"
                            >
                                services
                            </NavLink>

                            {navservices ? (
                                <FaAngleUp
                                    id="btn-header"
                                    className={
                                        navservices
                                            ? "fa-angle-down fa-angle-up"
                                            : "fa-angle-down"
                                    }
                                    onClick={() => setNavservices(!navservices)}
                                />
                            ) : (
                                <FaAngleDown
                                    id="btn-header"
                                    // { navservices ? "fas fa-angle-down fa-angle-up" : "fas fa-angle-down"}
                                    className=""
                                    onClick={() => setNavservices(!navservices)}
                                />
                            )}

                            <ul
                                className={
                                    navservices
                                        ? "navservices open"
                                        : "navservices"
                                }
                            >
                                <li>
                                    <NavLink
                                        to="/Service1"
                                        onClick={() => {
                                            setNavservices(!navservices);
                                            setNavbar(!navbar);
                                        }}
                                    >
                                        dump PDF files to word
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/Service2"
                                        onClick={() => {
                                            setNavservices(!navservices);
                                            setNavbar(!navbar);
                                        }}
                                    >
                                        discharge english and arabic to word
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/Service3"
                                        onClick={() => {
                                            setNavservices(!navservices);
                                            setNavbar(!navbar);
                                        }}
                                    >
                                        design of banznis card
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/Service4"
                                        onClick={() => {
                                            setNavservices(!navservices);
                                            setNavbar(!navbar);
                                        }}
                                    >
                                        design of correspondence paper
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <NavLink
                                to="/Materials"
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                                title="Materials"
                            >
                                Materials
                            </NavLink>
                        </li>

                        <li>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                title="Contact"
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                            >
                                contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Header;
