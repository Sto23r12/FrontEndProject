import "../App.css";
import { fixDateFormat } from "../../Api";
function CommentSection({ comments }) {
  if (comments.msg === "Not found") {
    return <h2>No Comment Found!</h2>;
  } else {
    return (
      <section className="CommentSection">
        {comments.comments.map((comment) => {
          console.log(Object.keys(comment));
          return (
            <li>
              <p>Comment: {comment.body}</p>
              <p>By: {comment.author}</p>
              <p>Created At: {fixDateFormat(comment.created_at)}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </section>
    );
  }
}

export default CommentSection;
