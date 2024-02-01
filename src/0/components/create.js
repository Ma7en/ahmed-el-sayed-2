import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [watingServer, setWatingServer] = useState(false);
    const navigator = useNavigate();

    const mySubmit = (e) => {
        e.preventDefault();
        const mypost = {
            userId,
            title,
            body,
        };
        setWatingServer(true);
        setTimeout(() => {
            fetch("http://localhost:3002/posts", {
                method: "POST",
                body: JSON.stringify(mypost),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json))
                .then(() => {
                    setWatingServer(false);
                    navigator("/posts");
                });
        }, 2000);
    };
    return (
        <div className="create">
            <div className="container">
                <h1>Create Posts</h1>
                <br />
                <form onSubmit={mySubmit}>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                        >
                            User Id
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampleFormControlInput1"
                            required
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlInput2"
                            className="form-label"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput2"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                        >
                            Body
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            // defaultValue={""}
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        {!watingServer && (
                            <button
                                type="submit"
                                className="btn btn-success mb-3"
                            >
                                Create
                            </button>
                        )}
                        {watingServer && (
                            <button
                                disabled
                                type="submit"
                                className="btn btn-success mb-3"
                            >
                                Please Wait
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
