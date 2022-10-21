import './Contact.css';
import Subtitle from "../../../components/Subtitle/Subtitle";
import Title from "../../../components/Title/Title";

export default function Contact() {
    return (<div className='contact-layout'>
        <div className='contact-header'>
            <Subtitle>Contact</Subtitle>
            <Title>If you liked my work you can contact me.</Title>
        </div>
        <div>
            <form className='contact-form'>
                <label>Subject</label>
                <input name="subject" id="subject" type="text" required></input>
                <label>Email</label>
                <input name="email" id="email" type="text" required></input>
                <label>Message</label>
                <textarea name="message" id="message" required></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    </div>);
}