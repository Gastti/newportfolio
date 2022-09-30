import './About.css'
import Container from "../../Container";
import Footer from "../../Footer/Footer";

export default function About() {
    return (
        <>
            <Container id='home' className='container-main'>

            </Container>
            <Container
                className='container-main'
                style={{ height: '450px', borderTop: '1px solid var(--color-underline)' }}>
                <Footer />
            </Container>
        </>
    );
}