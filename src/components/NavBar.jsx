import { Link, useNavigate } from "react-router-dom";
export function NavBar() {
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
    </nav>
  );
}
