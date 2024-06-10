// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { useEffect, useState } from "react";

const ProductDemos = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://case-craftopia-server.onrender.com/casedemos")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <h1 className=" text-4xl font-bold mt-4 text-center my-8">
        Some of our Product demos Customized By Our
        <span className="bg-slate-600 text-white   mx-3 my-2 px-3">
          Customers
        </span>
      </h1>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=" w-60 h-80"
      >
        {images.map((image) => (
          <SwiperSlide
            key={image._id}
            className="flex items-center justify-center rounded-lg font-bold text-black bg-blue-300"
          >
            <img src={image.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductDemos;
