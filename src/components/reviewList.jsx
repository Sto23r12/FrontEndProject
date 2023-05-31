import { useEffect, useState } from "react";
import { getReviews } from "../../utils";
import ReviewCard from "./reviewCard";

import "../App.css";

export function GetReviews() {
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
    });
  });

  return (
    <div className="page-container">
      <section className="Reviews">
        <h2>Reviews:</h2>

        {reviews.map((singleReview, index) => {
          return (
            <ReviewCard
              key={singleReview.review_id}
              reviewId={singleReview.review_id}
              title={singleReview.title}
              img={singleReview.review_img_url}
              category={singleReview.category}
              designer={singleReview.designer}
              owner={singleReview.owner}
              createdAt={singleReview.created_at}
              votes={singleReview.votes}
              commentCount={singleReview.comment_count}
              isActive={index === currentReview}
            />
          );
        })}
      </section>
    </div>
  );
}
