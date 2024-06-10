import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";

const Casecode = () => {
  const [image, setImage] = useState(null);

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

  return (
    <div>
      <div>
        <h1 className=" text-4xl font-bold">
          Upload Your Desied Photo for{" "}
          <span className="bg-slate-600 text-white  mx-3 my-2 px-3">
            Customized Case
          </span>
        </h1>
      </div>
      <div>
        <div>
          <div className="flex justify-end w-full mt-4">
            <button className="btn-small btn btn-outline border-black hover:bg-warning">
              Add to Cart <FaCartArrowDown />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <div className="relative" style={{ width: "224px", height: "458px" }}>
            <img
              src="blankcase1.png" // Path to your blank case image
              alt="Blank Mobile Case"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 2 }}
            />
            {image && (
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ zIndex: 1 }}
              >
                <img
                  src={image}
                  alt="Custom"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input file-input-bordered file-input-accent w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Casecode;
