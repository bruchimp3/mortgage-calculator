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
          setData({
            ...data,
            homeValue: value,
            downPayment: 0.2 * value,
            loanAmount: 0.8 * value,
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
        onChange={(e, value) =>
          setData({
            ...data,
            downPayment: value,
            loanAmount:(data.homeValue-value)
          })
        }
        unit="$"
        amount={data.downPayment}
      ></SliderComponent>

      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: value,
            downPayment:(data.homeValue-value)
          })
        }
        unit="$"
        amount={700}
      ></SliderComponent>

      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.5}
        onChange={(e, value) =>
          setData({
            ...data,

            interestRate: value,
          })
        }
        unit="%"
        amount={data.interestRate}
      ></SliderComponent>
    </>
  );
};

export default SliderSelect;
