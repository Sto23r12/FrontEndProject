import "../App.css";
import { fixDateFormat } from "../../Api";
function CommentSection({ comments }) {
  if (comments.msg === "Not found") {
    return <h2>No Comment Found!</h2>;
  } else {
    return (
      <section className="CommentSection">
        <ul>
          {comments.comments.map((comment) => {
            console.log(Object.keys(comment));
            return (
              <li key={comment.comment_id}>
                <p>Comment: {comment.body}</p>
                <p>By: {comment.author}</p>
                <p>Created At: {fixDateFormat(comment.created_at)}</p>
                <p>Votes: {comment.votes}</p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default CommentSection;
