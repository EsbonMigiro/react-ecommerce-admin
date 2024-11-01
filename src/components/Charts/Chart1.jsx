import React from "react";
import Chart from "react-apexcharts";

const Chart1 = () => {
  // Chart data and options
  const chartOptions = {
    chart: {
      id: "basic-line-chart",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
      },
    },
    xaxis: {
      categories: ["week 1 ", "2", "3", "4", "5", "6", "7"],
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "",
      align: "center",
    },
    dataLabels: {
      enabled: false,
    },
  };

  const chartSeries = [
    {
      name: "Sales",
      data: [30, 40, 45, 50, 49, 60, 70],
    },
  ];

  return (
    <>
      <div className="card rounded-4 w-100">
        <div className="card-body">
          <div className="d-flex align-items-center gap-3 mb-2">
            <div className="">
              <h2 className="mb-0">$10,000</h2>
            </div>

            <div className="">
              <p className="dash-lable d-flex align-items-center gap-1 rounded mb-0 bg-green-300 text-green-400 bg-opacity-10">
                <span className="material-icons-outlined fs-6">
                  arrow_upward
                </span>
                200.5%
              </p>
            </div>
          </div>
          <p className="mb-2"> Monthly sales</p>
          <div id="chart1n">
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="line"
              height="350"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart1;
