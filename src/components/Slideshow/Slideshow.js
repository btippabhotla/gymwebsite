import React, { useState, useEffect } from "react";

// Add your image imports here
import img1 from "../Images/imageOne.jpg";
import img2 from "../Images/imageTwo.jpg";
import img3 from "../Images/imageThree.jpg";

const images = [img1, img2, img3];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow-container" style={{ textAlign: "center" }}>
      <img
        src={images[current]}
        alt={`slide-${current}`}
        style={{ width: "100%", maxWidth: "600px", borderRadius: "1rem" }}
      />
      <div style={{ marginTop: "1rem" }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            style={{
              height: "12px",
              width: "12px",
              margin: "0 4px",
              background: idx === current ? "#333" : "#bbb",
              borderRadius: "50%",
              display: "inline-block",
              cursor: "pointer",
            }}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;