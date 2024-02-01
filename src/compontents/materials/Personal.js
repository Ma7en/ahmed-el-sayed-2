import React from "react";
import { Link } from "react-scroll";

// image avatar
// import avatar from "../../images/landing/avatar.png";

// design
// import Photoshop from "../../images/personal/photoshop.png";
// import Illustrator from "../../images/personal/illustrator.png";
// import indesign from "../../images/personal/indesign.png";
// import Word from "../../images/personal/word.png";

const Personal = () => {
    return (
        <>
            <div className="personal">
                <div className="container">
                    <div className="box">
                        <div className="content">
                            <img
                                src="images/landing/avatar.png"
                                loading="lazy"
                                alt="images/landing/avatar.png"
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
                    <div className="info">
                        <div className="text">
                            <h2>ahmed el sayed</h2>

                            <p>graphic desgin</p>
                        </div>
                        <div className="design">
                            <div className="image">
                                <img
                                    src="images/personal/photoshop.png"
                                    alt="images/personal/photoshop.png"
                                    title="Photoshop"
                                />
                                <img
                                    src="images/personal/illustrator.png"
                                    alt="images/personal/illustrator.png"
                                    title="Illustrator"
                                />
                                <img
                                    src="images/personal/indesign.png"
                                    alt="images/personal/indesign.png"
                                    title="indesign"
                                />
                                <img
                                    src="images/personal/word.png"
                                    alt="images/personal/word.png"
                                    title="Word"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Personal;
