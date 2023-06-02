import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleReview, getCommentsByReviewId } from "../../Api";
import "../App.css";
import CommentSection from "./CommentSection";

function SingleReview() {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState({});
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    getSingleReview(review_id).then(({ review }) => {
      setCurrentReview(review[0]);
      setLoading(false);
    });
  }, [review_id]);

  useEffect(() => {
    getCommentsByReviewId(review_id).then((comments) => {
      setComments(comments);
    });
  }, [review_id]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="SingleReview">
      <main>
        <h2>{currentReview.title}</h2>
        <img src={currentReview.review_img_url}></img>
        <br />
        <br />
        <p>{currentReview.review_body}</p>
        <br />
        <br />
        <section className="Details">
          <p>Designer: {currentReview.designer}</p>
          <p>Category: {currentReview.category}</p>
          <p>Owner: {currentReview.owner}</p>
          <p>Created At: {currentReview.created_at}</p>
          <p>Votes: {currentReview.votes}</p>
          <button className="comments-button" onClick={toggleComments}>
            {showComments ? "Hide Comments" : "Show Comments"}
          </button>
          {showComments && <CommentSection comments={comments} />}
        </section>
      </main>
    </section>
  );
}
