import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CaseDemos = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://case-craftopia-server.onrender.com/casedemos")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex h-screen my-12 bg-slate-600 rounded-xl ">
      {/* Left Side - Sticky Card */}
      <div className=" flex-auto  w-8 p-5 sticky top-0  bg-black rounded-xl justify-center items-center hidden md:block lg:block">
        <div className="bg-warning p-20 shadow-md rounded-lg">
          <h1 className=" text-4xl font-bold mt-4 ">
            Personalize Your Device with Our Custom
            <span className="bg-slate-600 text-white text-2xl     my-6 px-3">
              Creation Tool
            </span>
          </h1>
          <p className=" mt-4">
            Unlock your creativity and make your phone truly your own with our
            custom phone case creation tool. With endless possibilities at your
            fingertips create a one-of-a-kind design from scratch, our intuitive
            customization platform makes it easy. Choose from a variety of case
            types, colors, and materials, and let your imagination run wild.
            Whether you are looking for a thoughtful gift or want to treat
            yourself to something special, our custom phone cases are the
            perfect way to stand out from the crowd and make a statement. Start
            designing your masterpiece today and turn your phone into a work of
            art!
          </p>
        </div>
      </div>

      {/* Right Side - Scrollable Cards */}

      <div className="no-scrollbar w-1/2 flex-1 overflow-y-scroll p-20">
        <div className="block sm:hidden">
          <h1 className="text-center text-warning font-bold text-xl">
            Some Demo Of Our Customers Customized Phone Cases
          </h1>
        </div>
        <div className=" mb-5">
          {images.map((image) => (
            <div
              className=" w-72   h-full overflow-hidden my-2"
              key={image._id}
            >
              <img className="object-cover " src={image.imageUrl} alt="" />
            </div>
          ))}
        </div>

        {/* Content beneath the cards */}
        <div className="md:bg-warning lg:bg-warning md:p-20 ld:p-20 shadow-md rounded-lg">
          <p className="text-sm  font-semibold hidden md:block sm:block">
            Create Your Own Imangination or Keep your catured memories always
            with you
          </p>
          <Link className="btn btn-outline my-3 text-white lg:bg-slate-600 md:bg-slate-600 bg-warning hover:bg-black text-center">
            See more ...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseDemos;
