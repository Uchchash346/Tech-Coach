import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Tech Coach</h4>
                        <h1 className="list-unstyled">
                            <li>342-420-6969</li>
                            <li>Moscow, Russia</li>
                            <li>123 Streeet South North</li>
                        </h1>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Work with Us</h4>
                        <ui className="list-unstyled">
                            <li>Affiliate Program</li>
                            <li>Successful Students</li>
                            <li>Instructors</li>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>Navigate</h4>
                        <ui className="list-unstyled">
                            <li>All Coursess</li>
                            <li>Blogs</li>
                            <li>Requested Course</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Tech Coach | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;