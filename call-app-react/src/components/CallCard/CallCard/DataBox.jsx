import { useState } from "react";

export const DataBox = ({ onEdit, value }) => {
  const [handleValue, setValue] = useState(value);
  const editContainer = onEdit;

  return (
    <div className={"data-box"}>
      <p className="data-box--title">Interest</p>
      {editContainer === false
        ? Array(5).map(_, (index) => {
            if (index < handleValue) {
              return (
                <input
                  type="checkbox"
                  class="step-checkbox step-checkbox-default"
                ></input>
              );
            } else {
              return <input type="checkbox" class="step-checkbox"></input>;
            }
          })
        : Array(5).map(_, (index) => {
            if (index < handleValue) {
              return (
                <input
                  type="checkbox"
                  class="step-checkbox step-checkbox-selected"
                  onClick={setValue}
                ></input>
              );
            } else {
              return (
                <input
                  type="checkbox"
                  class="step-checkbox"
                  onClick={setValue}
                ></input>
              );
            }
          })}
    </div>
  );
};
