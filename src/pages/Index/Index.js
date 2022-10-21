import './Index.css'
import Navbar from "../../components/Navbar/Navbar";
import Container from "../../components/Container/Container";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";
import Contact from './Contact/Contact';

export default function Index() {
    return (
        <div className="App">
            <div style={{
                position: 'fixed',
                zIndex: 2,
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '1200px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    // backgroundColor: '#2b2b2b',
                    padding: '0px 25px',
                    borderRadius: '35px',
                    marginTop: '10px',
                    backdropFilter: 'blur(5px)'
                }}>
                    <Logo />
                    <Navbar />
                </div>
            </div>
            <Container
                style={{ height: '100vh', maxHeight: '1080px' }}
                id='home' className='container-main'>
                <Home />
            </Container>
            <Container
                id='about'
                className='container-secondary'
                style={{ height: '500px', maxHeight: '1080px' }}>
                <About />
            </Container>
            <Container
                id='technologies'
                className='container-main'
                style={{ height: '100vh', maxHeight: '1080px' }}>
                <Skills />
            </Container>
            <Container
                id='projects'
                className='container-secondary'
                style={{ maxHeight: '2000px', padding: '100px 0px' }}
            >
                <Portfolio />
            </Container>
            <Container
                id='contact'
                className='container-main'
                style={{ height: '100vh', maxHeight: '1080px' }}>
                <Contact />
            </Container>
            <Container
                className='container-main'
                style={{ borderTop: '1px solid var(--color-underline)' }}>
                <Footer />
            </Container>
        </div >
    );
}
