import React from "react";

const Home = () => {
    const clickMe = () => {
        console.log("hello");
    };
    const clickWithParams = (firstname) => {
        console.log(`first name is ${firstname}`);
    };
    const clickWithToParams = (firstname, secondname) => {
        console.log(`first name is ${firstname} and second Name is ${secondname}`);
    };
    const clickDark = (e) => {
        console.log(e.target);
    };
    const clickwarning = (firstname, e) => {
        console.log(`my name is ${firstname} and ${e.target}`);
    };

    return (
        <div className="landing">
            <div className="container">
                <h1>mazen saad</h1>
                <button
                    onClick={clickMe}
                    type="button"
                    className="btn btn-primary"
                >
                    Primary
                </button>
                <button
                    onClick={()=>{clickWithParams("mazen")}}
                    type="button"
                    className="btn btn-danger"
                >
                    Danger
                </button>
                <button
                    onClick={()=>{clickWithToParams("mazen", "saad")}}
                    type="button"
                    className="btn btn-info"
                >
                    info
                </button>
                <button
                    onClick={clickDark}
                    type="button"
                    className="btn btn-dark"
                >
                    dark
                </button>
                <button
                    onClick={(e) => {clickwarning("mazen", e.target)}}
                    type="button"
                    className="btn btn-warning"
                >
                    warning
                </button>
            </div>
        </div>
    );
};

export default Home;
