import React from 'react';
import { Link } from 'react-router-dom';
import courseList from '../CoursesArea/CourseList';
import CoursesArea from '../CoursesArea/CoursesArea';

const CoursePage = () => {
    const { courseCategories } = courseList;
    return (
        <div>
            <Link to='/'><h2 className="text-center">Teach Coach</h2></Link>
            <CoursesArea courseCategories={courseCategories} />
        </div>
    );
};

export default CoursePage;