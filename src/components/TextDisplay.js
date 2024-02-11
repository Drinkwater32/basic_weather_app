import React from "react";
import Typography from "@mui/material/Typography";

const TextDisplay = () => {
  return (
    <div
      style={{ textAlign: "center", marginTop: "15px", marginLeft: "150px" }}
    >
      <Typography
        variant="heading5"
        style={{ color: "white", fontFamily: "Arial, sans-serif" }}
      >
        Search for a city with the form to display weather information
      </Typography>
    </div>
  );
};

export default TextDisplay;
