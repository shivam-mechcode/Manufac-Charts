import React from "react";
import ReactEcharts from "echarts-for-react";
import data from "../../Wine-Data.json";
import "./styles.css";

const BarChart = () => {
  let malic = [];
  let add = [];
  let avg = [];
  let alc = 0;
  let malic3;
  // let Alcohol = []
  let avgMalic = [];
  for (let i = 1; i < data.length; i++) {
    avgMalic[i] = data.map((info) => {
      if (info.Alcohol === i) {
        return info["Malic Acid"];
      }
    });
    malic[i] = data.filter((info) => info.Alcohol === i);
  }
  for (let s = 0; s < malic.length; s++) {
    malic3 = malic.filter((malic2) => {
      return malic2.length !== 0;
    });
  }

  for (let j = 0; j < malic3.length; j++) {
    let sum = 0;
    for (let k = 0; k < malic3[j].length; k++) {
      sum = sum + malic3[j][k]["Malic Acid"];
    }
    add[j] = sum;
    avg[j] = sum / malic3[j].length;
  }

  console.log(malic);
  console.log(malic3);
  /*PREVIOUS CODE */

  // console.log(avg);

  // let count1 = 0;
  // let count2 = 0;
  // let count3 = 0;
  // let malic1 = 0;
  // let malic2 = 0;
  // let malic3 = 0;

  // data.map((info) => {
  //   if (info.Alcohol === 1) {
  //     malic1 = malic1 + info["Malic Acid"];
  //     count1++;
  //   } else if (info.Alcohol === 2) {
  //     malic2 = malic2 + info["Malic Acid"];
  //     count2++;
  //   } else if (info.Alcohol === 3) {
  //     malic3 = malic3 + info["Malic Acid"];
  //     count3++;
  //   }
  // });
  // const avgMalic1 = Math.round(malic1 / count1);
  // const avgMalic2 = Math.round(malic2 / count2);
  // const avgMalic3 = Math.round(malic3 / count3);
  // console.log(avgMalic1, avgMalic2, avgMalic3);
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
              data: malic3.map((alcohol) => {
                return `Alcohol - ${alcohol[alc].Alcohol}`;
                alc++;
              }),
            },
          ],
          yAxis: [
            {
              name: "Malic Acid",
              type: "value",
            },
          ],
          series: [
            {
              name: "Wine Data",
              type: "bar",
              barWidth: "60%",
              data: avg.map((avg2) => {
                return Math.round(avg2);
              }),
            },
          ],
        }}
        style={{ width: "100%", height: 400 }}
      />
    </div>
  );
};

export default BarChart;
