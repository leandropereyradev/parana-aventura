import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

const FishingZoneDetail = () => {
  const [fishingZone, setFishingZone] = useState([]);

  const { action } = useParanaAventuraContext();
  const { id } = useParams();
  const navegate = useNavigate();

  useEffect(() => {
    async function detailFishingZone() {
      try {
        const payload = await action.handleFishingZoneContext("DETAIL", id);

        for (const comments of payload.commentFishingZones) {
          const user = await action.handleUserContext("DETAIL", comments.user);
          comments.user = user;
        }

        setFishingZone(payload);
      } catch (error) {
        console.error(error);
      }
    }
    detailFishingZone();
  }, [id]);

  return (
    <>
      {fishingZone !== null ? (
        <div>
          <h1>{fishingZone.name}</h1>
          <img src={fishingZone.image} alt={fishingZone.name} />
          <p>{fishingZone.description}</p>

          <div>
            <h1>Hospedajes</h1>
            {fishingZone.lodgings?.map((lodging) => (
              <div key={lodging.id}>
                {lodging.image?.map((image, i) => (
                  <img key={i} src={image} alt={lodging.name} />
                ))}
                <h1>{lodging.name}</h1>
                {lodging.services?.map((service, i) => (
                  <p key={i}>{service}</p>
                ))}
                <button onClick={() => navegate(`/lodgings/${lodging.id}`)}>
                  Ver hospedaje
                </button>
              </div>
            ))}
          </div>

          <div>
            <h1>Peces de la zona</h1>
            {fishingZone.fish?.map((fish) => (
              <div key={fish.id}>
                <img src={fish.image} alt={fish.name} />
                <h1>{fish.name}</h1>
                <button onClick={() => navegate(`/fishes/${fish.id}`)}>
                  Ver pez
                </button>
              </div>
            ))}
          </div>
          <div>
            <h1>Comentarios</h1>
            {fishingZone.commentFishingZones?.map((comment) => (
              <div key={comment.id}>
                <h1>{comment.comment}</h1>
                <h2>{comment.user.name}</h2>
                <p>
                  {dayjs(comment.createdAt).format("D [de] MMMM [del] YYYY")}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default FishingZoneDetail;
