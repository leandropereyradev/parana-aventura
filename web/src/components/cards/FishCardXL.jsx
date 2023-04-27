import { useNavigate } from "react-router-dom";

const FishCardXL = ({ id, name, image, description }) => {
  const navegate = useNavigate();

  return (
    <div className="fishXL-container">
      <img src={image} alt={name} className="fishXL-image" />
      <div className="fishXL-text-container">
        <h1 className="fishXL-text-h1">{name}</h1>
        <p className="fishXL-text-p">{description.substring(0, 220) + "..."}</p>
        <div className="fishXL-btn-container">
          <button
            onClick={() => navegate(`/fishes/${id}`)}
            className="fishXL-btn"
          >
            Ver Pez
          </button>
        </div>
      </div>
    </div>
  );
};

export default FishCardXL;
