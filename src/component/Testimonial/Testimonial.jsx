import { useEffect, useState } from "react";

import TestimonialSingleCard from "./TestimonialSingleCard";

const Testimonial = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    fetch("https://case-craftopia-server.onrender.com/userreviews")
      .then((response) => response.json())
      .then((data) => setReviewsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <h1 className=" text-xl font-bold lg:text-6xl md:text-6xl text-center lg:text-left md:text-left">
        Reviews of our satisfied{" "}
        <span className="bg-slate-600 text-white text-xl  md:text-4xl lg:text-4xl mx-3 my-2 px-3">
          Customers
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12">
        {reviewsData.slice(0, 3).map((reviewData) => (
          <TestimonialSingleCard key={reviewData._id} reviewData={reviewData} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
