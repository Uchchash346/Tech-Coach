import React from 'react';
import './CourseSuccess.css';
import courses from '../../images/courses.png';
import followers from '../../images/followers.png';
import learners from '../../images/learner.png';
import enrolledStudents from '../../images/enroll.png';

const CourseSuccess = () => {
    return (
        <div>
            <div className="container">
                <h3 className="text-center">We are Proud</h3>
                <p className="text-center course-success-subtitle-area">You don't have to struggle alone, you've got our assistance and help.</p>
                <div className="container row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div class="card border-0" style={{ width: "14rem" }}>
                            <img src={enrolledStudents} className="course-success-image-area card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 className="text-center course-success-counter-area">23,055</h4>
                                <p className="card-text text-center course-success-title-area">Students Enrolled</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card border-0" style={{ width: "14rem" }}>
                            <img src={courses} className="course-success-image-area card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 className="text-center course-success-counter-area">235</h4>
                                <p className="card-text text-center course-success-title-area">Total Courses</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card border-0" style={{ width: "14rem" }}>
                            <img src={learners} className="course-success-image-area card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 className="text-center course-success-counter-area">1,775</h4>
                                <p className="card-text text-center course-success-title-area">Online Learners</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card border-0" style={{ width: "14rem" }}>
                            <img src={followers} className="course-success-image-area card-img-top" alt="..." />
                            <div class="card-body">
                                <h4 className="text-center course-success-counter-area">13,500</h4>
                                <p className="card-text text-center course-success-title-area">Foreign Followers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSuccess;