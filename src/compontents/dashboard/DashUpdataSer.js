import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DashCreateSer = () => {
    const [title, setTitle] = useState("");
    const [info1, setInfo1] = useState("");
    const [info2, setInfo2] = useState("");
    const [info3, setInfo3] = useState("");
    const [info4, setInfo4] = useState("");
    const [info5, setInfo5] = useState("");
    const [watingServer, setWatingServer] = useState(false);
    const nivigator = useNavigate();

    const mySubmit = (e) => {
        e.preventDefault();
        const myservice = {
            title,
            info1,
            info2,
            info3,
            info4,
            info5,
        };
        setWatingServer(true);
        setTimeout(() => {
            fetch("http://localhost:3002/cardservices", {
                method: "POST",
                body: JSON.stringify(myservice),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .then(() => {
                    setWatingServer(false);
                    nivigator("/Dashboard");
                });
        }, 2000);
    };
    return (
        <>
            <div className="dashcreateser">
                <div className="container">
                    <div className="title">
                        <h2>
                            <Link to="/Create">Create Services</Link>
                        </h2>
                        <p>
                            we have long experience in our field, so we can
                            provide excellent services to you.
                        </p>
                    </div>

                    <form onSubmit={mySubmit} action="" className="form">
                        <div className="row">
                            <label htmlFor="titleInput1" className="form-label">
                                Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="titleInput1"
                                placeholder="Enter Your Title"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="row">
                            <label htmlFor="InfoInput1" className="form-label">
                                Info
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                id="InfoInput1"
                                placeholder="Enter Your Info"
                                required
                                value={info1}
                                onChange={(e) => setInfo1(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                id="InfoInput1"
                                placeholder="Enter Your Info"
                                required
                                value={info2}
                                onChange={(e) => setInfo2(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                id="InfoInput1"
                                placeholder="Enter Your Info"
                                required
                                value={info3}
                                onChange={(e) => setInfo3(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                id="InfoInput1"
                                placeholder="Enter Your Info"
                                required
                                value={info4}
                                onChange={(e) => setInfo4(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                id="InfoInput1"
                                placeholder="Enter Your Info"
                                required
                                value={info5}
                                onChange={(e) => setInfo5(e.target.value)}
                            />
                        </div>

                        <div className="row">
                            {watingServer ? (
                                <button type="button" disabled>
                                    Please Wait
                                </button>
                            ) : (
                                <button type="submit">Create</button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default DashCreateSer;
