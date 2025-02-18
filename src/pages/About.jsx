import "../styles/about.css";
import artistImage from "/artist.jpg"; // Place image in `public/`

function About() {
  
  return (
    <div className="about-container">
      <img src={artistImage} alt="Musician" className="about-image" />
      <div className="about-text">
        <h1>About the Artist</h1>
        <p>Santiago Peña is a renowned musician known for his captivating melodies...</p>
      </div>
    </div>
  );
}

export default About;
