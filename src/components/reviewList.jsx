import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getReviews, fixDateFormat } from "../../Api";

import "../App.css";

export function GetReviews() {
  const { review_id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(-1);
  };

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, [review_id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page-container">
      <section className="Reviews">
        {reviews.map((singleReview, index) => {
          return (
            <section key={index} className="Review">
              <strong>{singleReview.title}</strong>
              <br></br>
              <img src={singleReview.review_img_url}></img>
              <p>Owner: {singleReview.owner}</p>
              <p>Date Created: {fixDateFormat(singleReview.created_at)}</p>
              <p>Category: {singleReview.category}</p>
              <Link to={`/reviews/${singleReview.review_id}`}>
                <button type="button">Details:</button>
              </Link>
              <button type="button" onClick={handleSubmit}>
                Back
              </button>
            </section>
          );
        })}
      </section>
    </div>
  );
}
