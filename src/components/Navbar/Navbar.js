import React from 'react';
import './Navbar.css'
import menuImage from '../../images/menu.png'
import { Link } from 'react-router-dom';
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
                                    <li><a class="dropdown-item" href="/coursePage">Web Development</a></li>
                                    <li><a class="dropdown-item" href="/coursePage">Machine Learning</a></li>
                                    <li><a class="dropdown-item" href="/coursePage">Data Science</a></li>
                                    <li><a class="dropdown-item" href="/coursePage">App Development</a></li>
                                    <li><a class="dropdown-item" href="/coursePage">Blockchain</a></li>
                                    <li><a class="dropdown-item" href="/coursePage">Cyber Security</a></li>
                                    <li><a class="dropdown-item" href="/coursePage">Others</a></li>
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
                                    <Link to="/coursePage">
                                        <a class="nav-link" href="/blogs" id="navbarDropdown" role="button" >
                                            Courses
                                        </a>
                                    </Link>

                                </li>
                                <li className="nav-item dropdown me-2">
                                    <Link to="/blogs">
                                        <a class="nav-link" href="/blogs" id="navbarDropdown" role="button" >
                                            Blogs
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <a class="nav-link" href="#" id="navbarDropdown" role="button">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex">
                            <Link to='/login'><button class="btn btn-outline-success me-2" type="submit">Sign In</button></Link>
                            <Link to='/login'><button class="btn btn-outline-danger me-2" type="submit">Sign Up</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;