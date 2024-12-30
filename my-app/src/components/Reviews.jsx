import React from 'react';
import './Reviews.css';

const reviews = [
  { name: "scarelet", rating: 5, comment: "RJ2 Architecture transformed our home! Highly recommend!" },
  { name: "Sofia Martinez", rating: 4, comment: "Innovative designs, excellent service, will hire again!" },
  { name: "Kenji Tanaka", rating: 5, comment: "Absolutely the best architecture firm we have worked with." },
  { name: "Amara Singh", rating: 5, comment: "Creative and timely project completion. Great experience!" },
  { name: "Liam O'Connor", rating: 4, comment: "Very professional and responsive. Loved the results!" },
  { name: "Isabella Rossi", rating: 5, comment: "The best architecture company in Europe. Modern and sleek designs!" },
  { name: "Chen Wei", rating: 5, comment: "Innovative designs, best in Asia. Highly satisfied." },
  { name: "Maria Gonzalez", rating: 5, comment: "RJ2 handled our office design perfectly. 5 stars!" },
  { name: "Michael Brown", rating: 4, comment: "Very reliable team. Attention to detail is commendable." },
  { name: "Aisha Al-Farsi", rating: 5, comment: "Breathtaking designs for our luxury villa. Exceeded expectations!" },
  { name: "felcy", rating: 3.5, comment: "The building was well structured,took time but its an excellent work !" },
  { name: "rovia", rating: 4.5, comment: "unique and creative designs for our modern house. talented architects!" }
];

function Reviews() {
  return (
    <div className="reviews-container">
      <h1>Customer Reviews</h1>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            {/* Placeholder for profile image */}
            <img
              src={`https://via.placeholder.com/60?text=${review.name.charAt(0)}`}
              alt={`${review.name}'s profile`}
              className="profile-image"
            />
            <div className="review-content">
              <h3>{review.name}</h3>
              <p className="rating">⭐ {review.rating}/5</p>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
