import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>
        Thanks For Donating !! It Will Be Of Great Help To Someone
      </Typography>
      <Link to="/orders">View Donations</Link>
    </div>
  );
};

export default OrderSuccess;
