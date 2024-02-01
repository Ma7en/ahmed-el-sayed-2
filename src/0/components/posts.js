import React from "react";
// import { data, error, post } from "jquery";
// import { useState, useEffect } from "react";
import Postslist from "./postslist";
import Postsmodel from "./postsmodel";

const Posts = () => {
    const { isWaiting, serverError, posts } = Postsmodel("http://localhost:3002/posts");

    return (
        <div className="container">
            {serverError && <h1>{serverError}</h1>}
            {isWaiting && <h1>plase wait to load data.... </h1>}
            <Postslist posts={posts} name="Posts" />
        </div>
    );
};

export default Posts;
