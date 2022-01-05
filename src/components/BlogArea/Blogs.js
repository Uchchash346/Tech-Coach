import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className="container">
            <h3 className="container blog-section">Blogs will coming soon 🙂</h3>
            <Link to='/'><h4 className="container text-center" style={{color: 'red'}}>Go Back</h4></Link>
        </div>
    );
};

export default Blogs;