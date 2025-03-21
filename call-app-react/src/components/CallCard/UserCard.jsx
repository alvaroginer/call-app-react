import { useState, useEffect } from "react";
import { CallCard } from "./CallCard/Call-Card";

export const UserCard = ({ user }) => {
  const [ratingColor, setRatingColor] = useState("");
  const [callData, setDataCall] = useState(false);

  useEffect(() => {
    if (user.overallRating >= 7.5) {
      setRatingColor("gradient-green");
    } else if (user.overallRating >= 5) {
      setRatingColor("gradient-yellow");
    } else {
      setRatingColor("gradient-red");
    }
  }, [user.overallRating]);

  const handleClick = () => {
    setDataCall(!callData);
  };

  return (
    <div className="card width__100 display-inline-block">
      <div className="event-card user-card grid-cell">
        <div className="display--flex">
          <div>
            <div className={`rating-container ${ratingColor}`}>
              <p className="margin-none">{user.overallRating}</p>
            </div>
            <p className="margin-none text-align-center font-size__12">
              ID: {user.id}
            </p>
          </div>
          <div className="event-card--text__p display--flex flex-direction-column margin--left__24">
            <h3 className="event-card--text__title text-align-left">
              {user.name}
            </h3>
            <div className="display--flex">
              <p className="margin-none color-orange">Estado:</p>
              <select name="userState" className="margin--left__6">
                <option value="text">Interesado</option>
                <option value="text">No interesado</option>
                <option value="text">Conversión</option>
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div className="event-card--button-container display--flex space--between">
          <button
            className="button-container--button calls-button-section"
            onClick={handleClick}
          >
            <img src="/imgs/phone.svg" alt="" />
          </button>
          <button className="button-container--button mails-button-section">
            <img src="/imgs/email.svg" alt="" />
          </button>
          <button className="button-container--button notes-button-section">
            <img src="/imgs/account-box-edit-outline.svg" alt="" />
          </button>
        </div>
      </div>
      {callData && (
        <div className="event-card--sub-section">
          <div className="sub-section--header">
            <p className="sub-section--header__title">Llamadas</p>
            <button className="sub-section--header__button">+</button>
          </div>
          <div className="call-cards--container scroll-grid">
            {user.calls.map((call) => {
              return <CallCard call={call} />;
            })}
          </div>
        </div>
      )}
      {/* Falta implementar las acciones de mailing y de teléfono */}
    </div>
  );
};
