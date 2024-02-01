import React from "react";
import DashHeader from "../../compontents/dashboard/DashHeader";
import Footer from "../../compontents/global/Footer";
import Goicon from "../../compontents/global/Goicon";

const Dashboard = () => {
    return (
        <>
            <Goicon />
            <DashHeader />
            <div style={{ minHeight: "100vh" }}></div>
            <Footer />
        </>
    );
};

export default Dashboard;
