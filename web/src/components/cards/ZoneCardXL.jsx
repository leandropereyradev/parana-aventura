import { useNavigate } from "react-router-dom";

const ZoneCardXL = ({ id, name, image, description }) => {
  const navegate = useNavigate();

  return (
    <div className="zoneXL-container">
      <img src={image} alt={name} className="zoneXL-image" />
      <div className="zoneXL-detail-container">
        <div className="zoneXL-text-container">
          <h2 className="zoneXL-text-h2">¿Dónde lo encontrarás?</h2>
          <h1 className="zoneXL-text-h1">{name}</h1>
          <p className="zoneXL-text-p">
            {description.substring(0, 220) + "..."}
          </p>
        </div>
        <button
          onClick={() => navegate(`/fishing-zones/${id}`)}
          className="zoneXL-text-btn"
        >
          Ver Zona
        </button>
      </div>
    </div>
  );
};

export default ZoneCardXL;
