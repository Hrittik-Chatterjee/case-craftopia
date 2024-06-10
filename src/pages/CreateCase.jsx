import { useState, useRef } from "react";

const CreateCase = () => {
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const offsetX = event.clientX - containerRect.left;
      const offsetY = event.clientY - containerRect.top;
      imageRef.current.style.left = offsetX + "px";
      imageRef.current.style.top = offsetY + "px";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="relative" style={{ width: "224px", height: "458px" }}>
        <img
          src="/blankcase1.png" // Path to your blank case image
          alt="Blank Mobile Case"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 2 }}
        />
        {image && (
          <div
            ref={imageRef}
            className="absolute"
            onMouseDown={handleMouseDown}
            style={{ zIndex: 1 }}
          >
            <img
              src={image}
              alt="Custom"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mt-4"
      />
    </div>
  );
};

export default CreateCase;
