import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div
      style={{padding: "20px"}}>
      <h2>Welcome to the Race Startlist page.</h2>
      <h3>As an organiser, please enter your organiser's title to see a list.</h3>
      <SearchBar />
    </div>
  );
}

export default App;
