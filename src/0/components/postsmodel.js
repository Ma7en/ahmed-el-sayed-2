import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Postsmodel = (url) => {
    const [isWaiting, setIsWaiting] = useState(true);
    const [serverError, setServerError] = useState(null);
    const [posts, setPost] = useState(null);
    // const navigator = useNavigate();
    // const deleteAction = (id) => {
    //     fetch("http://localhost:3002/posts/" + id, {
    //         method: "DELETE",
    //     }).then(() => {
    //         navigator("/posts");
    //     });
    // };
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    console.log(response);
                    if (!response.ok) {
                        throw Error("can not connet to the server!.");
                    }
                    return response.json();
                })
                .then((data) => {
                    // console.log(data);
                    setPost(data);
                    setIsWaiting(false);
                })
                .catch((error) => {
                    console.log(error.message);
                    setServerError(error.message);
                    setIsWaiting(false);
                });
        }, 2000);
    }, [url]);

    return { isWaiting, serverError, posts};
};

export default Postsmodel;
