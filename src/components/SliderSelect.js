import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <>
      <SliderComponent
        label="Home Value"
        min={1000}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={25}
        onChange={(e, value) =>
          setData({...data,
            homeValue: value,
          })
        }
        unit="$"
        amount={data.homeValue}
      ></SliderComponent>

      <SliderComponent
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={25}
        onChange={(e,value) => setData({
        
          downPayment: value
        })}
        unit="$"
        amount={data.downPayment}
      ></SliderComponent>

      <SliderComponent
        label="Loan Amount"
        min={0}
        max={50}
        defaultValue={20}
        step={10}
        onChange={(e) => console.log(e.target.value)}
        unit="$"
        amount={700}
      ></SliderComponent>

      <SliderComponent
        label="Interest Rate"
        min={0}
        max={15}
        defaultValue={20}
        step={10}
        onChange={(e) => console.log(e.target.value)}
        unit="%"
        amount={700}
      ></SliderComponent>
    </>
  );
};

export default SliderSelect;
