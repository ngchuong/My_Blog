import React from 'react';

import HeaderContainer from '../container/header-container';
import BodyContainer from '../container/body-container';
import FooterContainer from '../container/footer-container';

const Mainlayout = () => {
    return (
        <div id="main-layout">
            <HeaderContainer />
            <BodyContainer />
            <FooterContainer />
        </div>
    );
}

export default Mainlayout;