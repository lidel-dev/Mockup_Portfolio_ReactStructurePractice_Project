import './App.css';
import Home from './pages/home/Home';
import Nav from './components/Nav';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Resume from './pages/resume/Resume';
import Portfolio from './pages/portfolio/Portfolio';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from "react";

function App() {
  const [currentPage, handlePageChange] = useState("Home");
  const navs=["Home", "About", "Portfolio", "Resume", "Contact"]
  return (
    <div>
      <Router>
        <>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
        <Routes>
          <Route onClick={()=>handlePageChange(navs[0])} className={currentPage===navs[0] ? "color-one": "color-two"} path='/' element={<Home/>}/>
          <Route onClick={()=>handlePageChange(navs[1])} className={currentPage===navs[1] ? "color-one": "color-two"}id="contact" path='/contact' element={<Contact/>}/>
          <Route onClick={()=>handlePageChange(navs[2])} className={currentPage===navs[2] ? "color-one": "color-two"}path='/portfolio' element={<Portfolio/>}/>
          <Route onClick={()=>handlePageChange(navs[3])} className={currentPage===navs[3] ? "color-one": "color-two"}path='/about' element={<About/>}/>
          <Route onClick={()=>handlePageChange(navs[4])} className={currentPage===navs[4] ? "color-one": "color-two"}path='/resume' element={<Resume/>}/>
          {/* add routes here to pages */}
        </Routes>
        </>
      </Router>
      {/* <img src={logo}></img> */}
    </div>
  );
}

export default App;
