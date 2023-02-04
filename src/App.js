import React from "react";
import BarChart from "./Components/BarChart/BarChart";
import ScatterPlot from "./Components/Scatter_Plot/scatter_plot";
import "./App.css";

const App = () => {
  return (
    <div className="responsive">
      <BarChart />
      <ScatterPlot />
    </div>
  );
};

export default App;
