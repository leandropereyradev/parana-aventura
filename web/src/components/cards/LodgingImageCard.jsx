const LodgingImageCard = ({ image, name }) => {
  return (
    <>
      <div className="lodging-detail-images-container">
        <div className="lodging-detail-image1-container">
          <img
            src={image && image[0]}
            alt={name}
            className="lodging-detail-image-1"
          />
        </div>
        <div className="lodging-detail-image2-container">
          <img
            src={image && image[1]}
            alt={name}
            className="lodging-detail-image-2"
          />
        </div>
        <div className="lodging-detail-image3-container">
          <img
            src={image && image[2]}
            alt={name}
            className="lodging-detail-image-3"
          />
        </div>
      </div>
    </>
  );
};

export default LodgingImageCard;
