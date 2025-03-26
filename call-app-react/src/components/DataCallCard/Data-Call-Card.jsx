import { DataBox } from "./DataBox/DataBox";

export const DataCallCard = ({ isDefault, call }) => {
  return (
    <div className="call-card--main display--flex space--between">
      <div className="main--data-container">
        <DataBox
          isDefault={isDefault}
          value={call.customerInterest}
          title={"Interest"}
        />
        <DataBox
          isDefault={isDefault}
          value={call.objectionsRaised}
          title={"Objections"}
        />
        <DataBox
          isDefault={isDefault}
          value={call.conversionPotential}
          title={"Potential"}
        />
        <DataBox
          isDefault={isDefault}
          value={call.callClosure}
          title={"Clousure"}
        />
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
          <DataBox
            isDefault={isDefault}
            value={call.callDuration}
            title={"Duration"}
          />
          <DataBox
            isDefault={isDefault}
            value={call.technicalQuality}
            title={"Technical Quality"}
          />
        </div>
      )}
    </div>
  );
};
