import { useState, useEffect } from "react";
import "../styles/gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image

  useEffect(() => {
    fetch("/gallery-images.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  // Close lightbox when clicking outside the image or pressing ESC
  const closeLightbox = (e) => {
    if (e.target.classList.contains("lightbox-overlay") || e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener("keydown", closeLightbox);
    } else {
      document.removeEventListener("keydown", closeLightbox);
    }
    return () => document.removeEventListener("keydown", closeLightbox);
  }, [selectedImage]);

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      {loading && <p>Loading images...</p>}
      {error && <p>Error loading images.</p>}
      {!loading && !error && images.length === 0 && <p>No images available.</p>}

      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            onClick={() => setSelectedImage(src)} // Open lightbox on click
          />
        ))}
      </div>

      {/* Lightbox overlay */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <img className="lightbox-image" src={selectedImage} alt="Enlarged" />
          <button className="close-button" onClick={() => setSelectedImage(null)}>✖</button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
