import React from 'react';
import FrontPage from '../FrontPage/FrontPage';
import HeaderArea from '../HeaderArea/HeaderArea';
import Navbar from '../Navbar/Navbar';
import './HomePage.css';

const HomePage = ({ supportCategories }) => {
    return (
        <div>
            <section className="header-area">
                <Navbar />
                <HeaderArea />
            </section>
            <FrontPage />
        </div>
    );
};

export default HomePage;