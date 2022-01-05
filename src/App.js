import './App.css';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogs from './components/BlogArea/Blogs';
import CoursePage from './components/CoursePage/CoursePage';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/coursePage' element={<CoursePage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
