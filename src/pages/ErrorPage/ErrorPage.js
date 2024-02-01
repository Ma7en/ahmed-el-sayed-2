import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <div className="errorpage">
                <div className="container">
                    <div id="tsparticles" />
                    <div className="wrapper">
                        <h1>404</h1>
                        <h3>The page you are looking for does not exist.</h3>
                        <Link to="/">Back Home</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;
