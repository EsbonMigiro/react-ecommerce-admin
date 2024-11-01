import React from "react";
import Chart1 from "./Charts/Chart1";
import Chart2 from "./Charts/Chart2";
import Chart3 from "./Charts/Chart3";

function WeeklySales() {
  return (
    <>
      <div className="row weekly-sales">
        <div className="col-12 col-xl-4 d-flex">
          <Chart1 />
        </div>

        <div className="col-12 col-xl-4 d-flex">
          <Chart2 />
        </div>

        <div className="col-12 col-xl-4 d-flex">
          <Chart3 />
        </div>
      </div>
    </>
  );
}

export default WeeklySales;
