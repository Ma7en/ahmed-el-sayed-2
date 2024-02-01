import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Service1 from "./pages/services/Service1";
import Service2 from "./pages/services/Service2";
import Service3 from "./pages/services/Service3";
import Service4 from "./pages/services/Service4";
import Materials from "./pages/materials/Materials";
import Arabic from "./pages/materials/Arabic";
import Mathematics from "./pages/materials/Mathematics";
import English from "./pages/materials/English";
import Science from "./pages/materials/Science";
import Geography from "./pages/materials/Geography";
import Technology from "./pages/materials/Technology";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Create from "./pages/dashboard/Create";
// import Update from "./pages/dashboard/Update";
// import ServiceInfo from "./compontents/services/ServiceInfo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/About",
        element: <About />,
    },
    {
        path: "/Services",
        element: <Services />,
    },
    {
        path: "/Service1",
        element: <Service1 />,
    },
    {
        path: "/Service2",
        element: <Service2 />,
    },
    {
        path: "/Service3",
        element: <Service3 />,
    },
    {
        path: "/Service4",
        element: <Service4 />,
    },
    {
        path: "/Materials",
        element: <Materials />,
    },
    {
        path: "/Arabic",
        element: <Arabic />,
    },
    {
        path: "/Mathematics",
        element: <Mathematics />,
    },
    {
        path: "/English",
        element: <English />,
    },
    {
        path: "/Science",
        element: <Science />,
    },
    {
        path: "/Geography",
        element: <Geography />,
    },
    {
        path: "/Technology",
        element: <Technology />,
    },
    // {
    //     path: "/ServiceInfo/:id",
    //     element: <ServiceInfo />,
    // },
    // {
    //     path: "/Dashboard",
    //     element: <Dashboard />,
    // },
    // {
    //     path: "/Create",
    //     element: <Create />,
    // },
    // {
    //     path: "/Update",
    //     element: <Update />,
    // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerRegistration.register();
