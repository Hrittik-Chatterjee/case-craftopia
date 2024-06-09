/* eslint-disable react/prop-types */

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const TestimonialSingleCard = ({ reviewData }) => {
  const { name, image, review, rating } = reviewData;
  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden mx-auto">
      <div className="flex items-center p-4">
        <img className="w-12 h-12 rounded-full mr-4" src={image} alt={name} />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700 mb-4">{review}</p>
        <div className="flex">
          <Rating style={{ maxWidth: 250 }} value={rating} readOnly />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSingleCard;
