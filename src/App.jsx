import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { GetReviews } from "./components/reviewList";
import SingleReview from "./components/reviewCard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
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
