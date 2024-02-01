import React from "react";
import { useParams } from "react-router-dom";

const ServiceInfo = () => {
    const { id } = useParams();

    return (
        <>
            <h1>e {id}</h1>
        </>
    );
};

export default ServiceInfo;
