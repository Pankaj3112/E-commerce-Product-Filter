import React from "react";
import ProductsList from "./components/ProductsList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex gap-4 p-4">
      <Sidebar />
      <ProductsList />
    </div>
  );
}

export default App;
