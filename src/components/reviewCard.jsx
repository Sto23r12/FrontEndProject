import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleReview } from "../../utils";
import "../App.css";

export function SingleReview() {
  const [currentReview, setCurrentReview] = useState({});
  const { review_id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleReview(review_id).then(({ review }) => {
      setCurrentReview(review[0]);
      setLoading(false);
    });
  }, [review_id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="SingleReview">
      <main>
        <h2>{currentReview.title}</h2>
        <img src={currentReview.review_img_url}></img>
        <br />
        <p>{currentReview.review_body}</p>
        <br />
        <section className="Details">
          <p>Designer: {currentReview.designer}</p>
          <p>Category: {currentReview.category}</p>
          <p>Owner: {currentReview.owner}</p>
          <p>Created At: {currentReview.created_at}</p>
          <p>Votes: {currentReview.votes}</p>
          <p>Comments: {currentReview.comments}</p>
        </section>
      </main>
    </section>
  );
}
