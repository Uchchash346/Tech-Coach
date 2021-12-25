import './App.css';
import supportList from './components/SupportArea/SupportList'
import HomePage from './components/HomePage/HomePage';
import SupportArea from './components/SupportArea/SupportArea';
import SuccessArea from './components/SuccessArea/SuccessArea';


function App() {
  const { supportCategories } = supportList;
  return (
    <>
      <HomePage />
      <SupportArea supportCategories={supportCategories} />
      <SuccessArea />
    </>
  );
}

export default App;
