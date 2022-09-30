import { Route, Routes } from 'react-router-dom'
import Index from "./components/pages/Index/Index";
import About from "./components/pages/About/About";
import Navbar from './components/Navbar/Navbar';
import Logo from "./components/Logo";
import Projects from './components/pages/Projects/Projects';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    <>
      <div style={{
        width: '100%',
        height: '90px',
        backgroundColor: 'var(--color-container-main)',
        position: 'fixed',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="main-navbar">
          <Logo />
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;