import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../../utils";

import SingleReview from "./reviewCard";

import "../App.css";

export function GetReviews() {
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <div className="page-container">
      <section className="Reviews">
        <h2>Reviews:</h2>
        {reviews.map((singleReview, index) => {
          return (
            <section className="Review">
              <p key={singleReview.review_id}>{singleReview.review_id}</p>
              <strong>{singleReview.title}</strong>
              <br></br>
              <img src={singleReview.review_img_url}></img>

              <Link to={`/api/reviews/${singleReview.review_id}`}>
                <br></br>
                <button type="button">Details:</button>
              </Link>
              <p>Category: {singleReview.category}</p>
            </section>
          );
        })}
      </section>
    </div>
  );
}
