import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../../utils";

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
            <section key={index} className="Review">
              <li key={singleReview.review_id}>
                <strong>{singleReview.title}</strong>
                <br></br>
                <img src={singleReview.review_img_url}></img>
                <p>Owner: {singleReview.owner}</p>
                <p>Date Created: {singleReview.created_at}</p>
                <Link to={`/api/reviews/${singleReview.review_id}`}>
                  <button type="button">Details:</button>
                </Link>
                <p>Category: {singleReview.category}</p>
              </li>
            </section>
          );
        })}
      </section>
    </div>
  );
}
