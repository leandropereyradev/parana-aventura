import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

const LodgingDetail = () => {
  const [lodging, setLodging] = useState();

  const { action } = useParanaAventuraContext();
  const { id } = useParams();

  const navegate = useNavigate();

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
          fishingZones.push({
            id: singleZone.id,
            image: singleZone.image,
            name: singleZone.name,
          });
        }
        payload.fishingZone = fishingZones;

        setLodging(payload);
      } catch (error) {
        console.error(error);
      }
    }
    detailLodging();
  }, [id]);

  return (
    <>
      <div>
        {lodging !== undefined ? (
          <div>
            <h1>{lodging.name}</h1>
            {lodging.image?.map((image, i) => (
              <img key={i} src={image} alt={lodging.name} />
            ))}
            <p>{lodging.description}</p>
            {lodging.services?.map((service, i) => (
              <p key={i}>{service}</p>
            ))}
            <p>{lodging.price} € / noche</p>
          </div>
        ) : (
          <>Loading</>
        )}
      </div>
      <div>
        <h1>Zonas de pesca</h1>
        {lodging !== undefined ? (
          lodging.fishingZone?.map((zone) => (
            <div key={zone.id}>
              <h1>{zone.name}</h1>
              <img src={zone.image} alt={zone.name} />
              <button onClick={() => navegate(`/fishing-zones/${zone.id}`)}>
                Ver zona
              </button>
            </div>
          ))
        ) : (
          <>Loading...</>
        )}
      </div>
      <div>
        <h1>Comentarios</h1>
        {lodging !== undefined ? (
          lodging?.commentsLodging.map((comment) => (
            <div key={comment.id}>
              <h1>{comment.comment}</h1>
              <h2>{comment.user.name}</h2>
              <p>{dayjs(comment.createdAt).format("D [de] MMMM [del] YYYY")}</p>
            </div>
          ))
        ) : (
          <>Loading...</>
        )}
      </div>
    </>
  );
};

export default LodgingDetail;
