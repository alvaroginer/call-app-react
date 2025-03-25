export const CallCardSelect = () => {
  return (
    <div className="call-card--select">
      <div className="display--flex gap--5 align-items__center call-card--select__button call-card--button__edit">
        <img
          className="call-card--button__img"
          src="/imgs/pencil.png"
          alt="Edit button"
        />
        <p>Edit Call</p>
      </div>
      <div className="display--flex gap--5 align-items__center call-card--select__button call-card--button__delete">
        <img
          className="call-card--button__img"
          src="/imgs/delete.png"
          alt="Delete button"
        />
        <p>Delete Call</p>
      </div>
    </div>
  );
};
