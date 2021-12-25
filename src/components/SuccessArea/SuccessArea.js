import React from 'react';
import './SuccessArea.css'
import successImage from '../../images/about.jpg'

const SuccessArea = () => {
    return (
        <div className="container pt-5 success-area-section">
            <div class="row row-cols-2">
                <div class="col"><img src={successImage} alt="" className="rounded mx-auto d-block success-image-area" /></div>
                <div class="col">
                    <h2>Achieve Your <br /> Goals With Tech Coach</h2>
                    <p className="success-description-area">Lost the plot bobby such a fibber bleeding bits and bobs don't <br /> get shirty with me bugger all mate chinwag super pukka william <br /> barney, horse play buggered.</p>
                    <p className="success-skill-area"><span className="success-correct-icon">✔ </span> Upskill your organization.</p>
                    <p className="success-skill-area"><span className="success-correct-icon">✔ </span> Access more then 100K online courses</p>
                    <p className="success-skill-area"><span className="success-correct-icon">✔ </span> Learn the latest skills</p>
                    <div>
                        <button type="button" class="btn success-button-area"><span>Apply Now</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessArea;