import { useNavigate } from "react-router-dom";

const LodgingCard = ({ id, image, name, services }) => {
  const navegate = useNavigate();

  const IconsRender = {
    breakfast:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1682456329/parana-aventura/breakfast_i505zc.svg",
    dock: "https://res.cloudinary.com/dbr9eypvg/image/upload/v1682454369/parana-aventura/dock_twioee.svg",
    spa: "https://res.cloudinary.com/dbr9eypvg/image/upload/v1682454369/parana-aventura/spa_o7z8ju.svg",
    pool: "https://res.cloudinary.com/dbr9eypvg/image/upload/v1682456230/parana-aventura/pool_drbf84.svg",
  };

  return (
    <div key={id} className="lodging-card-container">
      <img src={image[0]} alt={name} className="lodging-card-image" />
      <div className="lodging-card-detail-container">
        <div className="lodging-card-detail-h1-container">
          <h1 className="lodging-card-detail-h1">{name}</h1>
        </div>
        <div className="lodging-card-detail-image-container">
          {services?.map((service, i) => (
            <div
              key={i}
              className="lodging-card-detail-image-container-container"
            >
              <img
                src={IconsRender[service]}
                alt={service.name}
                className="lodging-card-detail-image"
                title={service.name}
              />
            </div>
          ))}
        </div>
        <div className="lodging-card-btn-container">
          <button
            onClick={() => navegate(`/lodgings/${id}`)}
            className="lodging-card-btn"
          >
            ¡La quiero!
          </button>
        </div>
      </div>
    </div>
  );
};

export default LodgingCard;
