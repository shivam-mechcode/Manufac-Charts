import React from "react";
import ReactEcharts from "echarts-for-react";
import data from "../../Wine-Data.json";
import "./styles.css";

const BarChart = () => {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let malic1 = 0;
  let malic2 = 0;
  let malic3 = 0;
  data.map((info) => {
    if (info.Alcohol === 1) {
      malic1 = malic1 + info["Malic Acid"];
      count1++;
    } else if (info.Alcohol === 2) {
      malic2 = malic2 + info["Malic Acid"];
      count2++;
    } else if (info.Alcohol === 3) {
      malic3 = malic3 + info["Malic Acid"];
      count3++;
    }
  });
  const avgMalic1 = Math.round(malic1 / count1);
  const avgMalic2 = Math.round(malic2 / count2);
  const avgMalic3 = Math.round(malic3 / count3);
  console.log(avgMalic1, avgMalic2, avgMalic3);
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
              name: "Alcohol",
              type: "category",
              data: ["Alcohol-1", "Alcohol-2", "Alcohol-2"],
            },
          ],
          yAxis: [
            {
              name: "Malic Acid",
              type: "value",
              // boundaryGap: ["0", "0.1"],
            },
          ],
          series: [
            {
              name: "Wine Data",
              type: "bar",
              barWidth: "60%",
              data: [avgMalic1, avgMalic2, avgMalic3],
            },
          ],
        }}
        style={{ width: "100%", height: 400 }}
      />
    </div>
  );
};

export default BarChart;
