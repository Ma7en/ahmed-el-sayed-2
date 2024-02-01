import React from 'react';
import DashCreateSer from '../../compontents/dashboard/DashCreateSer';
import DashHeader from '../../compontents/dashboard/DashHeader';
import Footer from '../../compontents/global/Footer';
import Goicon from '../../compontents/global/Goicon';

const Create = () => {
    return (
        <>
            <Goicon />
            <DashHeader />
            <DashCreateSer />
            <Footer />
        </>
    );
}

export default Create;
