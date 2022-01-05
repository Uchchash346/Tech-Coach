import React from 'react';
import './HeaderArea.css'
import headerImage from '../../images/header-image.png'

const HeaderArea = () => {
    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 header-left-area">
                        <h1>Welcome to Teach Coach</h1>
                        <h2>World's best learning platform 📚</h2>
                        <div>
                            <button type="button" className="btn btn-primary me-2 header-button-area">Video</button>
                            <button type="button" className="btn btn-primary me-2 header-button-area">Get Now</button>
                        </div>
                    </div>
                    <div className="col-6 top-0 end-0">
                        <img className="img-fluid header-image-right" src={headerImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderArea;