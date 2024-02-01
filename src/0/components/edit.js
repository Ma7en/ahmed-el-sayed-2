import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [watingServer, setWatingServer] = useState(false);
    const navigator = useNavigate();
    const { id } = useParams();
    const [isWaiting, setIsWaiting] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:3002/posts/" + id)
                .then((response) => {
                    console.log(response);
                    if (!response.ok) {
                        throw Error("can not connet to the server!.");
                    }
                    return response.json();
                })
                .then((data) => {
                    setUserId(data.userId);
                    setTitle(data.title);
                    setBody(data.body);
                    setIsWaiting(false);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }, 2000);
    });

    const mySubmit = (e) => {
        e.preventDefault();
        const mypost = {
            userId,
            title,
            body,
            id,
        };
        setWatingServer(true);
        setTimeout(() => {
            fetch("http://localhost:3002/posts/" + id, {
                method: "PUT",
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
                {isWaiting && <h1>plase wait to load data.... </h1>}
                <h1>Update Posts</h1>
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
                    <div className="col-auto d-flex flex-column-reverse align-items-center  justify-content-center g-10">
                        <button
                            onClick={() => navigator("/posts")}
                            type="button"
                            className="btn btn-primary"
                        >
                            Go Back
                        </button>
                        {!watingServer && (
                            <button
                                type="submit"
                                className="btn btn-success mb-3"
                            >
                                Update
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

export default Edit;
