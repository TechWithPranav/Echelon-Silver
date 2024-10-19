"use client";
import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

import ApexChart from '../../components/Charts/Charts';  // Correct import based on default export

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3 className="heading_updates font-bold">Latest Reads for You</h3>
        <Updates />
      </div>
      
    </div>
  );
};

export default RightSide;
