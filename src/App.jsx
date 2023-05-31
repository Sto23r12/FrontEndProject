import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { GetReviews } from "./components/reviewList";
import "./App.css";

import SingleReview from "./components/reviewCard";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Games App!</h1>
      </header>
      <NavBar />
      <Routes>
        <Route path="/api/reviews" element={<GetReviews />} />
        <Route path="/api/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
