/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Postslist = ({ posts, name }) => {
    const navigator = useNavigate();
    const deleteAction = (id) => {
        fetch("http://localhost:3002/posts/" + id, {
            method: "DELETE",
        }).then(() => {
            navigator("/");
        });
    };

    return (
        <div className="posts">
            <div className="container">
                <h1>{name}</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts &&
                            posts.map((post) => (
                                <tr key={post.id}>
                                    <th scope="row">{post.id}</th>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                deleteAction(post.id);
                                            }}
                                            type="button"
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <Link
                                            to={"/posts/" + post.id}
                                            className="btn btn-info"
                                        >
                                            More
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            to={"/edit/" + post.id}
                                            className="btn btn-success"
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Postslist;
