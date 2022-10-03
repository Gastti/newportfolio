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
            <Container
                style={{ height: '100vh', maxHeight: '1080px' }}
                id='home' className='container-main'>
                <Home />
            </Container>
            <Container
                id='about'
                className='container-secondary'
                style={{ height: '100vh', maxHeight: '1080px' }}>
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
                className='container-main'
                style={{ height: '450px', borderTop: '1px solid var(--color-underline)' }}>
                <Footer />
            </Container>
        </div >
    );
}
