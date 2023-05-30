import { useState } from "react";
import GetHeader from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  const [user, setUser] = useState("");
  return (
    <BrowserRouter>
      <>
        <GetHeader />
      </>
    </BrowserRouter>
  );
}

export default App;
