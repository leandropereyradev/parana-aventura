import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useParams } from "react-router-dom";
import ZoneCardXL from "../cards/ZoneCardXL";
import CommentCard from "../cards/CommentCard";

const LodgingDetail = ({ setTitle }) => {
  const [lodging, setLodging] = useState();

  const { action } = useParanaAventuraContext();
  const { id } = useParams();

  useEffect(() => {
    async function detailLodging() {
      try {
        const payload = await action.handleLodgingContext("DETAIL", id);

        for (const comments of payload.commentsLodging) {
          const user = await action.handleUserContext("DETAIL", comments.user);
          comments.user = user;
        }

        const fishingZones = [];
        for (const zone of payload.fishingZone) {
          const singleZone = await action.handleFishingZoneContext(
            "DETAIL",
            zone
          );
          fishingZones.push(singleZone);
        }
        payload.fishingZone = fishingZones;

        setLodging(payload);
        setTitle(payload.name);
      } catch (error) {
        console.error(error);
      }
    }
    detailLodging();
  }, [id]);

  const IconsRender = {
    breakfast:
      "https://res.cloudinary.com/dbr9eypvg/image/upload/v1682456329/parana-aventura/breakfast_i505zc.svg",
    dock: "https://res.cloudinary.com/dbr9eypvg/image/upload/v1682454369/parana-aventura/dock_twioee.svg",
    spa: "https://res.cloudinary.com/dbr9eypvg/image/upload/v1682454369/parana-aventura/spa_o7z8ju.svg",
    pool: "https://res.cloudinary.com/dbr9eypvg/image/upload/v1682456230/parana-aventura/pool_drbf84.svg",
  };

  return (
    <>
      <div className="lodging-detail-container">
        {lodging !== undefined ? (
          <div className="lodging-detail-imagescard-container">
            <div className="lodging-detail-images-container">
              <div className="lodging-detail-image1-container">
                <img
                  src={lodging.image[0]}
                  alt={lodging.name}
                  className="lodging-detail-image-1"
                />
              </div>
              <div className="lodging-detail-image2-container">
                <img
                  src={lodging.image[1]}
                  alt={lodging.name}
                  className="lodging-detail-image-2"
                />
              </div>
              <div className="lodging-detail-image3-container">
                <img
                  src={lodging.image[2]}
                  alt={lodging.name}
                  className="lodging-detail-image-3"
                />
              </div>
            </div>
            <div className="lodging-detail-services_price-container">
              <div className="lodging-detail-services-container">
                {lodging.services?.map((service, i) => (
                  <div key={i}>
                    <img
                      src={IconsRender[service]}
                      alt={service.name}
                      className="lodging-detail-services-image"
                      title={service.name}
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="lodging-detail-services_price-p">
                  <span className="lodging-detail-services_price-span">
                    {lodging.price}
                  </span>{" "}
                  € / noche
                </p>
              </div>
            </div>
            <div className="lodging-detail-description-container">
              <p className="lodging-detail-description-p">
                {lodging.description}
              </p>
            </div>
          </div>
        ) : (
          <>Loading</>
        )}
      </div>
      <div className="lodging-detail-lodging-container">
        <h1 className="lodging-detail-lodging_comment-h1">Zonas de pesca</h1>
        {lodging !== undefined ? (
          lodging?.fishingZone?.map((zone) => (
            <ZoneCardXL key={zone.id} {...zone} />
          ))
        ) : (
          <>Loading...</>
        )}
      </div>
      <div className="lodging-detail-comments-container">
        <h1 className="lodging-detail-lodging_comment-h1">Comentarios</h1>
        {lodging !== undefined ? (
          lodging?.commentsLodging.map((comment) => (
            <CommentCard key={comment.id} {...comment} />
          ))
        ) : (
          <>Loading...</>
        )}
      </div>
    </>
  );
};

export default LodgingDetail;
