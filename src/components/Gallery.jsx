import { useState, useEffect } from "react";
import "../styles/gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/gallery-images.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      {loading && <p>Loading images...</p>}
      {error && <p>Error loading images.</p>}
      {!loading && !error && images.length === 0 && <p>No images available.</p>}
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
