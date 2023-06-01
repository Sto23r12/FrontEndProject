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
      <Link to="/categories">
        <button type="button">Categories</button>
      </Link>
      <Link to="/reviews">
        <button type="button">Reviews</button>
      </Link>
      <Link to="/comments">
        <button type="button">Comments</button>
      </Link>
      <br />
      <button type="button" onClick={handleSubmit}>
        Back
      </button>
    </nav>
  );
}
