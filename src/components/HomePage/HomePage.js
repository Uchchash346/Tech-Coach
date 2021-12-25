import React from 'react';
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
        </div>
    );
};

export default HomePage;