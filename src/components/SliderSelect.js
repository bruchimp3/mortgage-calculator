import React from "react";
import SliderComponent from "./common/SliderComponent";


const SliderSelect = () => {
  return (
    <>
    
      <SliderComponent
      label="Home Value"
        min={0}
        max={50}
        defaultValue={20}
        step={10}
        onChange={(e)=>console.log(e.target.value)}
        unit = '$'
        amount={3000}
      ></SliderComponent>

<SliderComponent
      label="Down Payment"
        min={0}
        max={50}
        defaultValue={20}
        step={10}
        onChange={(e)=>console.log(e.target.value)}
        unit = '$'
        amount={500}
      ></SliderComponent>

<SliderComponent
      label="Loan Amount"
        min={0}
        max={50}
        defaultValue={20}
        step={10}
        onChange={(e)=>console.log(e.target.value)}
        unit = '$'
        amount={700}
      ></SliderComponent>
      
    </>
  );
};

export default SliderSelect;
