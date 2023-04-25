import { useNavigate } from "react-router-dom";

const FishCard = ({ id, name, image }) => {
  const navegate = useNavigate();

  return (
    <div key={id} className="fish-card-container">
      <img src={image} alt={name} className="fish-card-image" />
      <h1 className="fish-card-h1">{name}</h1>
      <div className="fish-card-btn-container">
        <button
          onClick={() => navegate(`/fishes/${id}`)}
          className="fish-card-btn"
        >
          ¡Péscalo!
        </button>
      </div>
    </div>
  );
};

export default FishCard;
