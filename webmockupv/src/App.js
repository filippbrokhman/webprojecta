import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';

function App() {
  return (
    /*
    <div className="App">
      <NavBar />
    </div>
    */
   <>
    <NavBar></NavBar>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
      </Routes>
    </div>
   </>
  );
}

export default App;
