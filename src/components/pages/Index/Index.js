import './Index.css'
import Navbar from "../../Navbar/Navbar.js";
import Container from "../../Container";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../../Footer/Footer";
import Logo from "../../Logo.js";

export default function Index() {
    return (
        <div className="App">
            {/* <div style={{
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
            </div> */}
            <Container id='home' className='container-main'>
                <Home />
            </Container>
            <Container id='about' className='container-secondary'>
                <About />
            </Container>
            <Container id='technologies' className='container-main'>
                <Skills />
            </Container>
            <Container id='projects' className='container-secondary'>
                <Portfolio />
            </Container>
            <Container
                className='container-main'
                style={{ height: '450px', borderTop: '1px solid var(--color-underline)' }}>
                <Footer />
            </Container>
        </div >
    );
}
