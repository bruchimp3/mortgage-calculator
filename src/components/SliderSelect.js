import React from "react";
import SliderComponent from "./common/SliderComponent";
import { Typography } from "@mui/material";

const SliderSelect = () => {
  return (
    <>
    <Typography variant = "subtitle2">Home Value</Typography>
    <Typography variant = "h5">$ 3000</Typography>
      <SliderComponent
        min={0}
        max={50}
        defaultValue={20}
        step={10}
        onChange={(e)=>console.log(e.target.value)}
      ></SliderComponent>
      <Typography></Typography>
    </>
  );
};

export default SliderSelect;
