import { useState } from "react";
import { DataCallCard } from "../DataCallCard/Data-Call-Card";
import { CallCardSelect } from "./Call-Card-Select";

export const CallCard = ({ call }) => {
  const [containerState, setContainerState] = useState("default");
  const [showSelect, setShowSelect] = useState(false);

  const handleClick = () => {
    setShowSelect(true);
  };

  return (
    <div className="call-card">
      <div className="call-card--header">
        <p className="call--title">Llamada {call.number}</p>
        <div className="call--header__data-container">
          <div className="title-container">
            <p className="title-container--text__orange">Fecha</p>
            <p className="title-container--text__grey">12/11/25</p>
          </div>
          <div className="title-container">
            <p className="title-container--text__orange">Duración</p>
            <p className="title-container--text__grey">00:12:24</p>
          </div>
          <div className="position-relative">
            <button
              onClick={handleClick}
              className="sub-section--header__button"
            >
              <img src="/imgs/dots-vertical.png" alt="Edit Menu" />
            </button>
            {showSelect && <CallCardSelect />}
          </div>
        </div>
      </div>
      <hr />
      <DataCallCard type={containerState} call={call} />
    </div>
  );
};
