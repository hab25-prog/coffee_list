import React from "react";
import CoffeeCollection from "./components/CoffeeCollection";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Banner />
      <CoffeeCollection />
    </div>
  );
}
function Banner() {
  return (
    <img
      src="/asset/bg-cafe-lg.jpg"
      alt=" their is an image"
      className="banner"
    />
  );
}
export default App;
