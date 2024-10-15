import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  if (!images.length) {
    return <p>No images available.</p>;
  }

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Project ${index}`} className="gallery-image" />
      ))}
    </div>
  );
};

export default ImageGallery;
