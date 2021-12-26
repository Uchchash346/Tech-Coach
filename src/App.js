import './App.css';
import supportList from './components/SupportArea/SupportList'
import HomePage from './components/HomePage/HomePage';
import SupportArea from './components/SupportArea/SupportArea';
import SuccessArea from './components/SuccessArea/SuccessArea';
import CoursesArea from './components/CoursesArea/CoursesArea';
import courseList from './components/CoursesArea/CourseList'

function App() {
  const { supportCategories } = supportList;
  const {courseCategories} = courseList;
  return (
    <>
      <HomePage />
      <SupportArea supportCategories={supportCategories} />
      <SuccessArea />
      <CoursesArea courseCategories = {courseCategories} />
    </>
  );
}

export default App;
