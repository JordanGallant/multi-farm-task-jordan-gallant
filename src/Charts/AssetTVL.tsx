import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default function AssetTVL() {
  const [label, setLabel] = useState([]);
  const [data, setData] = useState([]);

  var months = [
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

  React.useEffect(() => {
    axios
      .get(
        "https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000"
      )
      .then((result) => {
        setLabel<Date>(
          Object.keys(result.data.data[0].selected_farm[0].tvlStakedHistory)
            .reverse()
            .map(
              (key) =>
                months[
                  new Date(
                    Date.parse(
                      result.data.data[0].selected_farm[0].tvlStakedHistory[key]
                        .date
                    )
                  ).getMonth()
                ] +
                " " +
                new Date(
                  Date.parse(
                    result.data.data[0].selected_farm[0].tvlStakedHistory[key]
                      .date
                  )
                ).getDate()
            )
        );
        setData<number[]>(
          Object.keys(
            result.data.data[0].selected_farm[0].tvlStakedHistory
          ).map(
            (key) =>
              parseFloat(
                result.data.data[0].selected_farm[0].tvlStakedHistory[key].value
              ) / 1000000000
          )
        );
      });
  }, []);

  return (
    <div>
      <Line
        data={{
          labels: label,
          datasets: [
            {
              label: "Asset TVL",
              backgroundColor: "rgba(188,40,246,0.2)",
              borderColor: "rgba(188,40,246,1)",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(188,40,246,0.4)",
              hoverBorderColor: "rgba(188,40,246,1)",
              data: data
            }
          ]
        }}
      />
    </div>
  );
}
