import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>Get in touch for performances, collaborations, or inquiries.</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
