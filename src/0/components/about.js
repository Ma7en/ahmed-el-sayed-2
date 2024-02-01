import React from "react";
import { useState } from "react";

const About = () => {
    // let firstname = "mazen";
    let [firstname, setFirstname] = useState("mazen");
    let [secondname, setSecondname] = useState("saad");
    let [age, setAge] = useState(22);
    const changename = () => {
        // firstname = "saad";
        // console.log(firstname);
        setFirstname("saad");
        setSecondname("ahmed");
        setAge(23);
    };
    return (
        <div className="about">
            <div className="container">
                <h1>about</h1>
                <h1>{firstname}</h1>
                <h1>{secondname}</h1>
                <h1>{age}</h1>
                <button
                    onClick={changename}
                    type="button"
                    className="btn btn-primary"
                >
                    Primary
                </button>
            </div>
        </div>
    );
};

export default About;
