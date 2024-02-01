import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

// import logo from "../../images/header/logo.jpg";

const Contact = () => {
    return (
        <>
            {/* <div className="wavescont">
                <div className="wave"></div>
            </div> */}
            <div className="contact" id="contact">
                <div className="overlay" />
                <div className="container">
                    <div className="main-title">
                        <h2>
                            <a href="html/contact/contacten.html">Contact us</a>
                        </h2>
                        <p>
                            We are here to answer your inquiries and feedback.
                        </p>
                    </div>

                    <div className="content">
                        <div className="box">
                            <FaPhoneAlt className="i" />
                            <a href="tel:+201147253573">+20 114 725 3573</a>
                        </div>

                        <div className="box">
                            <FaMapMarkerAlt className="i" />
                            <a>Egypt - Cairo - Sohag</a>
                        </div>

                        <div className="box">
                            <FaEnvelope className="i" />
                            <a href="mailto:m9ee9m@gmail.com?subject=Contact">
                                m9ee9m@gmail.com
                            </a>
                        </div>
                    </div>

                    <form action="#" method="POST" className="form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="message"
                            required
                            defaultValue={""}
                        />

                        <button type="submit">send</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
