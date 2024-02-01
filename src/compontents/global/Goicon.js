import React, { useEffect, useState } from "react";
import { FaAngleUp, FaMoon, FaSun, FaCog, FaShareAlt } from "react-icons/fa";

const Goicon = () => {
    const [backToTop, setBackToTop] = useState(false);
    console.log(``, backToTop);
    const [cog, setCog] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setCog(false);
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        });
    }, []);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // const [theme, setTheme] = useState("light-theme");
    // const toggleTheme = () => {
    //     if (theme === "dark-theme") {
    //         setTheme("light-theme");
    //         localStorage.setItem("data-theme", "light");
    //         localStorage.getItem("data-theme");
    //     } else {
    //         setTheme("dark-theme");
    //         localStorage.setItem("data-theme", "dark");
    //         localStorage.getItem("data-theme");
    //     }
    // };
    // useEffect(() => {
    //     document.body.className = theme;
    // }, [theme]);
    // ===============
    const [darkMode, setdarkMode] = useState(false);
    const ActiveMode = async () => {
        setdarkMode(!darkMode);
        if (darkMode === true) {
            document.body.classList.add("light_mode");
            document.body.classList.remove("dark_mode");
            await localStorage.setItem("data-theme", "light_mode");
        }
        if (darkMode === false) {
            document.body.classList.add("dark_mode");
            document.body.classList.remove("light_mode");
            await localStorage.setItem("data-theme", "dark_mode");
        }
    };
    useEffect(() => {
        if (localStorage.getItem("data-theme") === "light_mode") {
            document.body.classList.add("light_mode");
        } else if (localStorage.getItem("data-theme") === "dark_mode") {
            document.body.classList.add("dark_mode");
            setdarkMode(!darkMode);
        }
    }, []);

    const share = () => {
        let shareDate = {
            title: document.title,
            url: document.location.href,
        };
        if (navigator.canShare(shareDate)) {
            navigator.share(shareDate);
        }
    };
    return (
        <>
            <div className="goicon">
                <div
                    className={cog ? "fl_toggle active" : "fl_toggle"}
                    onClick={() => {
                        setCog(!cog);
                    }}
                    id="fl-toggle"
                >
                    <FaCog className="i" />
                </div>

                <ul className="fl_list">
                    <li
                        className="fl_link"
                        onClick={() => {
                            setCog(!cog);
                            scrollUp();
                        }}
                    >
                        <div className="fl_icon">
                            <FaAngleUp className="i" />
                        </div>
                    </li>

                    <li
                        className="fl_link"
                        onClick={() => {
                            setCog(!cog);
                            ActiveMode();
                        }}
                    >
                        <div className="fl_icon">
                            {localStorage.getItem("data-theme") ===
                            "dark_mode" ? (
                                <FaSun className="i" />
                            ) : (
                                <FaMoon className="i" />
                            )}
                        </div>
                    </li>

                    <li className="fl_link">
                        <div
                            onClick={() => {
                                setCog(!cog);
                                share();
                            }}
                            className="fl_icon"
                        >
                            <FaShareAlt className="i" />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Goicon;
