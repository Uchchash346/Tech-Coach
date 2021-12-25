import React from 'react';
import './Navbar.css'
import menuImage from '../../images/menu.png'
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-area-section">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Tech Coach</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   <img src={menuImage} alt="" className="menuImageArea" /> Category
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex flex-row-reverse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown me-2">
                                    <a class="nav-link" href="#" id="navbarDropdown" role="button">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Courses
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Blogs
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Contact
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex">
                            <button class="btn btn-outline-success me-2" type="submit">Sign In</button>
                            <button class="btn btn-outline-danger me-2" type="submit">Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;