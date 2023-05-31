import "../App.css";
function ReviewCard({
  reviewId,
  title,
  category,
  designer,
  owner,
  img,
  createdAt,
  votes,
  commentCount,
}) {
  return (
    <div className="review-card">
      <h3>{title}</h3>
      <img src={img} alt={`Image for ${title}`} />
      <p>Review ID: {reviewId}</p>
      <p>Category: {category}</p>
      <p>Designer: {designer}</p>
      <p>Owner: {owner}</p>
      <p>Created At: {createdAt}</p>
      <p>Votes: {votes}</p>
      <p>Comment Count: {commentCount}</p>
    </div>
  );
}

export default ReviewCard;
