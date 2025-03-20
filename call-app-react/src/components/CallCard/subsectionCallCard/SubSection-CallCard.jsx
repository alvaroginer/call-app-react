import { DataBox } from "./DataBox";

export const SubSection = ({ call }) => {
  return (
    <div className="call-card">
      <div className="call-card--header">
        <p className="call--title">
          Llamada ${"{"}index + 1{"}"}
        </p>
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
            <button className="sub-section--header__button">
              <img src="./imgs/dots-vertical.png" alt="Edit Menu" />
            </button>
            <div className="call-card--select">
              <div className="display--flex gap--5 align-itmes__center call-card--select__button call-card--button__edit">
                <img
                  className="call-card--button__img"
                  src="./imgs/pencil.png"
                  alt="Edit button"
                />
                <p>Edit Call</p>
              </div>
              <div className="display--flex gap--5 align-itmes__center call-card--select__button call-card--button__delete">
                <img
                  className="call-card--button__img"
                  src="./imgs/delete.png"
                  alt="Edit button"
                />
                <p>Delete Call</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="call-card--main display--flex space--between">
        <div className="main--data-container">
          <DataBox />
          <DataBox />
          <DataBox />
        </div>
        <div className="text-align-center display--flex align-itmes__center">
          <div className="main--call-rating">
            <p className="call-rating--title">Call rate</p>
            <p className="call-rating--number">{call.callRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
