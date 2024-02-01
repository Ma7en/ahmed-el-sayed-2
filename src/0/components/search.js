// import { post } from "jquery";
import React from "react";
import { useState, useEffect } from "react";

const Search = () => {
    const [query, setQuery] = useState("");
    const [posts, setPost] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3002/posts/")
            .then((response) => {
                if (!response.ok) {
                    throw Error("can not connet to the server!.");
                }
                return response.json();
            })
            .then((data) => {
                setPost(data);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);
    return (
        <div className="search">
            <div className="container">
                <h1>Search</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Enter "
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    {posts &&
                        posts
                            .filter((post) => {
                                if (query === "") {
                                    return post;
                                } else if (
                                    post.tilte
                                        .toLowerCase()
                                        .includes(query.toLowerCase())
                                ) {
                                    return post;
                                }
                            })
                            .map((post, index) => {
                                <div className="box" key={index}>
                                    <p>{post.title}</p>
                                    <p>{post.userId}</p>
                                    <p>{post.body}</p>
                                </div>;
                            })}
                </div>
            </div>
        </div>
    );
};

export default Search;
