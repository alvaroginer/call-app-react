import { DataBox } from "./DataBox";

export const DataCallCard = ({ type, call }) => {
  const isDefault = type === "default";

  return (
    <div className="call-card--main display--flex space--between">
      <div className="main--data-container">
        <DataBox />
        <DataBox />
        <DataBox />
      </div>
      {isDefault ? (
        <div className="text-align-center display--flex align-itmes__center">
          <div className="main--call-rating">
            <p className="call-rating--title">Call rate</p>
            <p className="call-rating--number">{call.callRating}</p>
          </div>
        </div>
      ) : (
        <div className="main--data-container">
          <DataBox />
          <DataBox />
          <DataBox />
        </div>
      )}
    </div>
  );
};
