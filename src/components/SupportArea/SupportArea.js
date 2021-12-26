import React from 'react';
import './SupportArea.css'

const SupportArea = ({ supportCategories }) => {

    return ( 
        <div className="container">
            <h2 className="text-center pt-3">Why An Scholercity Out Of The Ordinary 😎</h2>
            <div className="container row row-cols-1 row-cols-md-4 " >
                {supportCategories.map((supportCategory) => (
                    <div class="card-deck support-all-categories-area">
                        <div class="card support-category-section-area pt-3 text-white" style={{ backgroundColor:supportCategory.backgroundColor}}>
                            <img src={supportCategory.image} class="card-img-top support-image-area" alt="" />
                            <div class="card-body support-card-area">
                                <h5 class="card-title text-center text-md">{supportCategory.title}</h5>
                                <p class="card-text">{supportCategory.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SupportArea;
