// import { post } from "jquery";
import React from "react";
import { useParams } from "react-router-dom";
import Postsmodel from "./postsmodel";
import { useNavigate } from "react-router-dom";

const PostInfo = () => {
    const navigator = useNavigate();
    const { id } = useParams();
    const { isWaiting, serverError, posts } = Postsmodel(
        "http://localhost:3002/posts/" + id
    );

    return (
        <div className="postinfo">
            <div className="container">
                <h1>PostInfo - {id}</h1>
                {serverError && <h1>{serverError}</h1>}
                {isWaiting && <h1>plase wait to load data.... </h1>}
                {posts && (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{posts.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                UserId: {posts.id}
                            </h6>
                            <p className="card-text">{posts.body}</p>
                            <button
                                onClick={() => navigator("/posts")}
                                type="button"
                                className="btn btn-primary"
                            >
                                Go Back
                            </button>
                            <a href="# " className="card-link">
                                Another link
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostInfo;
