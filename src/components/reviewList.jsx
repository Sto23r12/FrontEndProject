import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../../utils";

import SingleReview from "./reviewCard";

import "../App.css";

export function GetReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="page-container">
      <section className="Reviews">
        {reviews.map((singleReview, index) => {
          return (
            <section className="Review">
              <p key={singleReview.review_id}>{singleReview.review_id}</p>
              <strong>{singleReview.title}</strong>
              <br></br>
              <img src={singleReview.review_img_url}></img>

              <Link to={`/reviews/${singleReview.review_id}`}>
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
