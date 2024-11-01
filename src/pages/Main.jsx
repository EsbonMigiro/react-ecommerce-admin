import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import WeeklySales from "../components/WeeklySales";
import Projections from "../components/Projections";
import Projects from "../components/Projects";
import Earnings from "../components/Earnings";

function Main() {
  return (
    <>
      <div className="main-wrapper">
        <div className="main-content bg-gray-200">
          {/* <!--breadcrumb--> */}
          <BreadCrumb />

          {/* <!--end breadcrumb--> */}

          {/* <!--Start of weekly-sales--> */}

          <Earnings />

          <WeeklySales />

          {/* <!--end of weekly-sales--> */}
          <Projects />

          {/* <!--start of Projections--> */}
          {/* <Projections /> */}
          {/* <!--end of Projections--> */}

          {/* <!--start of Projects--> */}
          {/* <!--end of Projects--> */}
        </div>
      </div>
    </>
  );
}

export default Main;
