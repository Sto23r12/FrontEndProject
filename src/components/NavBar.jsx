import { Link, useNavigate } from "react-router-dom";
export function NavBar() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(-1);
  };
  return (
    <nav>
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <Link to="/api/categories">
        <button type="button">Categories</button>
      </Link>
      <Link to="/api/reviews">
        <button type="button">Reviews</button>
      </Link>
      <Link to="/api/comments">
        <button type="button">Comments</button>
      </Link>
      <br />
      <button type="button" onClick={handleSubmit}>
        Back
      </button>
    </nav>
  );
}
