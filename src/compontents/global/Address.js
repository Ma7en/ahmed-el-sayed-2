/* eslint-disable react/prop-types */

import React from "react";

// import { Link } from "react-router-dom";

const Address = ({ titlePage, descriptionPage }) => {
    return (
        <>
            <div className="address">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="main-title">
                            <h2>
                                <a>{titlePage}</a>
                            </h2>
                            <p>{descriptionPage}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Address;
