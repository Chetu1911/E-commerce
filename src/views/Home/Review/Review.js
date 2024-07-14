

import React from 'react';
import Slider from 'react-slick';
import './Review.css';

const reviews = [
  {
    image: 'path/to/image1.jpg',
    name: 'John Doe',
    rating: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    image: 'path/to/image2.jpg',
    name: 'Jane Smith',
    rating: 5,
    review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  // Add more reviews as needed
];

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className="review-section">
      <h2>Customer Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.image} alt={review.name} className="review-image" />
            <h3>{review.name}</h3>
            <div className="review-rating">
              {Array(review.rating).fill().map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
              {Array(5 - review.rating).fill().map((_, i) => (
                <span key={i} className="star empty">☆</span>
              ))}
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
