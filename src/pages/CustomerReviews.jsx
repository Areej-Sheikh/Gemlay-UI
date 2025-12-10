import React from "react";
import google from "../assets/google.png";
import quote from "../assets/quote.png";
import star from "../assets/star.png";
import starFilled from "../assets/starFill.svg";

const ReviewCard = ({ name, date, text, rating }) => {
  return (
    <div className="min-w-[280px] sm:w-[25%] bg-[#F9F9F9] m-4 py-8 px-5 rounded-bl-4xl rounded-tr-4xl shadow-md flex-shrink-0">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p>{name}</p>
          <span className="text-[#007A64] flex justify-center text-sm">
            {date}
          </span>
        </div>
        <img src={quote} alt="quote icon" />
      </div>

      <div className="mb-7">{text}</div>

      <div className="flex items-center justify-between">
        <img src={google} alt="google logo" className="w-[10%]" />
        <div className="flex">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={i <= rating ? starFilled : star}
              alt="star"
              className="w-5"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Himesh",
      date: "May 25, 2025",
      text: "Talk about a range of elements, including customer service. Be detailed, specific, and honest.",
      rating: 1,
    },
    {
      name: "Anjali",
      date: "March 10, 2025",
      text: "Fantastic experience! The staff was extremely supportive.",
      rating: 5,
    },
    {
      name: "Rohan",
      date: "January 2, 2025",
      text: "Worth every penny. Amazing service and great response time.",
      rating: 4,
    },
    {
      name: "Priya",
      date: "February 14, 2025",
      text: "Very satisfied with the quality and timely delivery.",
      rating: 5,
    },
    {
      name: "Amit",
      date: "March 5, 2025",
      text: "Customer support was helpful and resolved my queries quickly.",
      rating: 4,
    },
    {
      name: "Sneha",
      date: "April 12, 2025",
      text: "Beautiful designs and excellent craftsmanship. Highly recommend!",
      rating: 5,
    },
    {
      name: "Vikram",
      date: "May 1, 2025",
      text: "Good experience overall, but packaging could be improved.",
      rating: 3,
    },
  ];

  return (
    <div
      className="w-full"
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 233, 191, 0.4) 0%, rgba(250, 250, 250, 1) 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center text-xl m-10">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-20 bg-[#007A64]" />
          <div className="font-semibold">CUSTOMER REVIEWS</div>
          <div className="h-0.5 w-20 bg-[#007A64]" />
        </div>
        <div className="text-[#007A64]">KNOW ABOUT WHAT OTHERS THINK</div>
      </div>

      <div className="flex overflow-x-auto scrollbar-hide px-4 py-6 gap-4">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>

      <div className="mt-14 text-[#007A64] flex justify-center text-lg">
        READ MORE <i className="ri-arrow-right-s-fill"></i>
      </div>
    </div>
  );
};

export default CustomerReviews;
