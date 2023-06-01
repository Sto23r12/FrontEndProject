import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../../utils";
import "react-horizontal-scrolling-menu/dist/styles.css";

import "../App.css";

export function GetReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <div className="page-container">
      <section className="Reviews">
        {reviews.map((singleReview, index) => {
          return (
            <section key={index} className="Review">
              <p>{singleReview.review_id}</p>
              <strong key={singleReview.title}>{singleReview.title}</strong>
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
