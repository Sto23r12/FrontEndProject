import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { GetReviews } from "./components/reviewList";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
        <h1>Games App!</h1>
      </header>
      <Routes>
        <Route path="/reviews" element={<GetReviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
