/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// import ComService1 from "./ComService1";
// import ComService2 from "./ComService2";
// import ComService3 from "./ComService3";
// import ComService4 from "./ComService4";

// import imgservice1 from "../../images/services/service1.jpg";
// import imgservice2 from "../../images/services/service2.jpg";
// import imgservice3 from "../../images/services/service3.jpg";
// import imgservice4 from "../../images/services/service4.jpg";
// import { data, error } from "jquery";

const ServicesCom = ({ address }) => {
    const [services, setServices] = useState(null);
    const [isWaiting, setIsWaiting] = useState(true);
    const [serverError, setServerError] = useState(null);
    console.log(``, setServerError, setIsWaiting, setServices);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch("http://localhost:3002/services")
    //             .then((response) => {
    //                 if (!response.ok) {
    //                     throw Error("Can Not Coonect To the Server!");
    //                 }
    //                 return response.json();
    //             })
    //             .then((data) => {
    //                 setServices(data);
    //                 setIsWaiting(false);
    //             })
    //             .catch((error) => {
    //                 setServerError(error.message);
    //                 setIsWaiting(false);
    //             });
    //     }, 1000);
    // }, []);

    return (
        <>
            <div className="services" id="services">
                <div className="container">
                    {address && (
                        <div className="main-title">
                            <h2>
                                <Link to="/Services">services</Link>
                            </h2>
                            <p>
                                we have long experience in our field, so we can
                                provide excellent services to you.
                            </p>
                        </div>
                    )}

                    <div className="content">
                        {serverError && <h2>{serverError}</h2>}
                        {isWaiting && <h2>Please wait to load data...</h2>}
                        {services &&
                            services.map((service) => (
                                <div
                                    key={service.id}
                                    className="cont"
                                    id="ser1"
                                >
                                    <div className="left">
                                        <h3>
                                            <NavLink to="/Service1">
                                                {service.title}
                                            </NavLink>
                                        </h3>

                                        <div className="info">
                                            <div className="box">
                                                <span>
                                                    {service.description}
                                                </span>
                                            </div>
                                        </div>

                                        <Link to={`/ServiceInfo/${service.id}`}>
                                            more
                                        </Link>
                                    </div>
                                    <div className="right">
                                        <img
                                            // src={`imgservice${service.id}`}
                                            src={service.image}
                                            loading="lazy"
                                            alt="services1"
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            {/* <div className="spikes" /> */}
        </>
    );
};

export default ServicesCom;
