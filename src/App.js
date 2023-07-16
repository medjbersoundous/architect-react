import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import About from './components/About';
import Slide from './components/Slide';
import Project from './components/Project';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <div>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Slide" element={<Slide />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </div>
      <Main />
      </div>
     <About />
     <Slide />
     <div className='hr'>
      <div>
      <hr className='horz'/>
      </div>
      <div>
      <hr className='horz'/>
      </div>
     </div>
     <Project />
     <Footer />

    </div>
  );
}

export default App;
