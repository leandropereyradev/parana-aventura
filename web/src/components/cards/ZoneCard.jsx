import { useNavigate } from "react-router-dom";

const ZoneCard = ({ image, name, id, description }) => {
  const navegate = useNavigate();

  return (
    <div className="fishing-section-container">
      <img src={image} alt={name} className="fishing-section-image" />
      <div className="fishing-section-data-container">
        <h1 className="fishing-section-h1">{name}</h1>
        <div className="fishing-section-data-text-container">
          <p className="fishing-section-data-text-p">
            {description.substring(0, 220) + "..."}
          </p>
          <div className="flex w-full">
            <button
              className="fishing-section-data-text-btn"
              onClick={() => navegate(`/fishing-zones/${id}`)}
            >
              Ver zona
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoneCard;
