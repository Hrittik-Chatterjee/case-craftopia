import { useEffect, useState } from "react";

import TestimonialSingleCard from "./TestimonialSingleCard";

const Testimonial = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/userreviews")
      .then((response) => response.json())
      .then((data) => setReviewsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <h1 className=" text-6xl font-bold mt-4 text-center">
        Reviews of our satisfied{" "}
        <span className="bg-slate-600 text-white   mx-3 my-2 px-3">
          Customers
        </span>
      </h1>
      <div className="grid grid-cols-3 gap-6 mt-12">
        {reviewsData.slice(0, 3).map((reviewData) => (
          <TestimonialSingleCard key={reviewData.id} reviewData={reviewData} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
