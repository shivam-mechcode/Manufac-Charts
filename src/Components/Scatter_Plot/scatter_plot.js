import React from "react";
import "./style.css";
import ReactEcharts from "echarts-for-react";
import data1 from "../../Wine-Data.json";

const ScatterPlot = () => {
  return (
    <div className="App">
      <ReactEcharts
        key={Date.now()}
        theme="light"
        option={{
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          grid: {},
          xAxis: [
            {
              name: "Color intensity",
              type: "value",
            },
          ],
          yAxis: [
            {
              name: "Hue",
              type: "value",
              // boundaryGap: ["0", "0.1"],
            },
          ],
          series: [
            {
              name: "Color intensity to Hue",
              type: "scatter",

              data: data1.map((info) => [info["Color intensity"], info.Hue]),
            },
          ],
        }}
        style={{ width: "100%", height: 400 }}
      />
    </div>
  );
};

export default ScatterPlot;
