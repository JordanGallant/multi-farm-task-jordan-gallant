import React from "react";
import { Line } from "react-chartjs-2";

export default function AssetAPR() {
  var months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var dates: Date[] = [];
  var currentDate: Date = new Date();
  for (var i = 0; i < 10; i++) {
    currentDate.setDate(currentDate.getDate() + 1);
    dates.push(new Date(currentDate));
  }

  var num: number = 100;
  var nums: number[] = [];
  for (var j = 0; j < 10; j++) {
    num *= 1.05;
    nums.push(num);
  }

  const data = {
    labels: [
      months[new Date().getMonth()] + " " + new Date().getDate(),
      months[dates[0].getMonth()] + " " + dates[0].getDate(),
      months[dates[1].getMonth()] + " " + dates[1].getDate(),
      months[dates[2].getMonth()] + " " + dates[2].getDate(),
      months[dates[3].getMonth()] + " " + dates[3].getDate(),
      months[dates[4].getMonth()] + " " + dates[4].getDate(),
      months[dates[5].getMonth()] + " " + dates[5].getDate(),
      months[dates[6].getMonth()] + " " + dates[6].getDate(),
      months[dates[7].getMonth()] + " " + dates[7].getDate(),
      months[dates[8].getMonth()] + " " + dates[8].getDate()
    ],

    datasets: [
      {
        label: "Asset APR",
        backgroundColor: "rgba(73,159,246,0.2)",
        borderColor: "rgba(73,159,246,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(173,159,246,0.4)",
        hoverBorderColor: "rgba(73,159,246,1)",
        pointRadius: 2,
        data: [
          nums[0],
          nums[1],
          nums[2],
          nums[3],
          nums[4],
          nums[5],
          nums[6],
          nums[7],
          nums[8],
          nums[9]
        ]
      }
    ]
  };

  return (
    <div className="App main">
      <Line data={data} />
    </div>
  );
}
