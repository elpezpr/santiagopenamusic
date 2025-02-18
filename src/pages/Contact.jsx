import "../styles/contact.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>Get in touch for performances, collaborations, or inquiries.</p>
      <ContactForm /> {/* This loads the form from ContactForm.jsx */}
    </div>
  );
}

export default Contact;
