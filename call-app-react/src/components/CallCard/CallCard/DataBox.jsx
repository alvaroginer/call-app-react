import { useEffect } from "react";
import { paintInputs } from "../../../functions/paintInputs";

export const DataBox = ({ className, value, color }) => {
  useEffect(() => {
    const checkBoxContainer = document.querySelector(`.${className}`);
    paintInputs(checkBoxContainer, value, color);
  });

  return (
    <div className={"data-box" + className}>
      <p className="data-box--title">Interest</p>
      <input type="checkbox" className="step-checkbox" />
      <input type="checkbox" className="step-checkbox" />
      <input type="checkbox" className="step-checkbox" />
      <input type="checkbox" className="step-checkbox" />
      <input type="checkbox" className="step-checkbox" />
    </div>
  );
};
