import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// import logo from "../../images/header/logo.jpg";

const DashHeader = () => {
    const [navbar, setNavbar] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavbar(navbar);
        });
    }, []);

    // const contactRef = useRef(null);
    // const scrollToSection = (elementRef) => {
    //     window.scrollTo({
    //         top: elementRef.current.offsetTop,
    //         behavior: "smooth",
    //     });
    // };

    return (
        <>
            <div className="header " id="home">
                <div className="container">
                    <Link to="/dashboard " className="logo">
                        <img
                            src="images/header/logo.jpg"
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
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                                title="Home"
                            >
                                home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/Dashboard"
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                                title="Dashboard"
                            >
                                dashboard
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/Create"
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                                title="Create"
                            >
                                Create
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/Update"
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                                title="Update"
                            >
                                Update
                            </NavLink>
                        </li>
                    </ul>

                    {/* <ul className={navbar ? "nav_2 open" : "nav_2"}>
                        <i
                            className="fas fa-times close"
                            onClick={() => setNavbar(!navbar)}
                        />

                        <li>
                            <a href="#home">Home</a>
                        </li>

                        <li>
                            <a href="#about">about</a>
                        </li>

                        <li>
                            <a href="#services">services</a>
                        </li>

                        <li>
                            <a href="#contact">contact us</a>
                        </li>
                    </ul> */}
                </div>
            </div>
        </>
    );
};

export default DashHeader;
