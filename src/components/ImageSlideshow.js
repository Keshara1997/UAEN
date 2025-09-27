import React, { useState, useEffect } from "react";

const ImageSlideshow = ({
  images = [
    "/images/DubaiWeb/Premium Photo 01.png",
    "/images/DubaiWeb/Premium Photo 02.png",
    "/images/DubaiWeb/Premium Photo 05.png",
    "/images/DubaiWeb/Premium Photo 11.png",
    "/images/DubaiWeb/Premium Photo 12.png",
    "/images/DubaiWeb/Premium Photo 13.png",
    "/images/DubaiWeb/Premium Photo 14.png",
    "/images/DubaiWeb/Premium Photo 15.png",
    "/images/DubaiWeb/Premium Photo 16.png",
    "/images/DubaiWeb/Premium Photo 17.png",
  ],
  autoPlay = true,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isPlaying, images.length, interval]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrevious = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  const goToNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-[100vh] overflow-hidden rounded-3xl shadow-xl group">
      {/* Image Slides */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

     

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white scale-125 shadow-md"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlideshow;
