import React from 'react';
import courseList from '../CoursesArea/CourseList';
import CoursesArea from '../CoursesArea/CoursesArea';
import Footer from '../FooterArea/Footer';
import SuccessArea from '../SuccessArea/SuccessArea';
import CourseSuccess from '../SuccessfullyCompletedArea/CourseSuccess';
import SupportArea from '../SupportArea/SupportArea';
import supportList from '../SupportArea/SupportList';

const FrontPage = () => {
    const { supportCategories } = supportList;
    const { courseCategories } = courseList;
    return (
        <>
            <SupportArea supportCategories={supportCategories} />
            <SuccessArea />
            <CoursesArea courseCategories={courseCategories} />
            <CourseSuccess />
            <Footer />
        </>
    );
};

export default FrontPage;