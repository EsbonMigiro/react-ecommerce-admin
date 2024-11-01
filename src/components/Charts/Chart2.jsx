import React from "react";
import Chart from "react-apexcharts";

const Chart2 = () => {
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
      categories: ["Mon", "Tue", "Wen", "Thurs", "Fri", "Sat", "Sun"],
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

    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#0d6efd"],
        shadeIntensity: 1,
        type: "vertical",
        opacityFrom: 0.8,
        opacityTo: 0.1,
        stops: [0, 100, 100, 100],
      },
    },
  };

  const chartSeries = [
    {
      name: "Sales",
      data: [30, 40, 45, 50, 45, 55, 50],
    },
  ];

  return (
    <>
      <div className="card rounded-4 w-100">
        <div className="card-body">
          <div className="d-flex align-items-center gap-3 mb-2">
            <div className="">
              <h2 className="mb-0">$15,000</h2>
            </div>

            <div className="">
              <p className="dash-lable d-flex align-items-center gap-1 rounded mb-0 bg-green-300 text-green-400 bg-opacity-10">
                <span className="material-icons-outlined fs-6">
                  arrow_upward
                </span>
                150.5%
              </p>
            </div>
          </div>
          <p className="mb-0">Weekly S sales</p>
          <div id="chart1n">
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="area"
              height="350"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart2;
