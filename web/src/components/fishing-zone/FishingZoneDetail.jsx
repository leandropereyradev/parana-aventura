import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useParams } from "react-router-dom";
import LodgingCard from "../cards/LodgingCard";
import FishCard from "../cards/FishCard";
import CommentCard from "../cards/CommentCard";

const FishingZoneDetail = ({ setTitle }) => {
  const [fishingZone, setFishingZone] = useState([]);

  const { action } = useParanaAventuraContext();
  const { id } = useParams();

  useEffect(() => {
    async function detailFishingZone() {
      try {
        const payload = await action.handleFishingZoneContext("DETAIL", id);

        for (const comments of payload.commentFishingZones) {
          const user = await action.handleUserContext("DETAIL", comments.user);
          comments.user = user;
        }

        setFishingZone(payload);
        setTitle(payload.name);
      } catch (error) {
        console.error(error);
      }
    }
    detailFishingZone();
  }, [id]);

  return (
    <>
      {fishingZone !== null ? (
        <>
          <div className="zone-detail-zone-container">
            <img
              src={fishingZone.image}
              alt={fishingZone.name}
              className="zone-detail-zone-image"
            />
            <p className="zone-detail-zone-p">{fishingZone.description}</p>
          </div>

          <div className="lodging-container">
            {fishingZone.lodgings?.map((lodging) => (
              <LodgingCard key={lodging.id} {...lodging} />
            ))}
          </div>

          <div className="zone-detail-article-container">
            <p className="zone-detail-article-p">{fishingZone.article_a}</p>
            <p className="zone-detail-article-p">{fishingZone.article_b}</p>
          </div>

          <div className="zone-detail-fishes-container">
            <h1 className="zone-detail-fishes-h1">¡Mira lo que encontrarás!</h1>

            <div className="zone-detail-fishes-detail-container">
              {fishingZone.fish?.map((fish) => (
                <FishCard key={fish.id} {...fish} />
              ))}
            </div>
          </div>

          <div className="zone-detail-comment-container">
            <h1 className="zone-detail-comment-h1">¡Cuéntanos qué opinas!</h1>
            {fishingZone.commentFishingZones?.map((comment) => (
              <CommentCard key={comment.id} {...comment} />
            ))}
          </div>
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default FishingZoneDetail;
