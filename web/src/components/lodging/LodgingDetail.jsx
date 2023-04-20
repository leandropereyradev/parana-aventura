import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const LodgingDetail = () => {
  const [lodging, setLodging] = useState();
  const [fishingZones, setFishingZones] = useState();

  const { action } = useParanaAventuraContext();
  const { id } = useParams();

  const navegate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function detailLodging() {
      try {
        const payload = await action.handleLodgingContext("DETAIL", id);
        const fishingZones = payload.fishingZone;

        const zones = [];
        for (const zone of fishingZones) {
          const singleZone = await action.handleFishingZoneContext(
            "DETAIL",
            zone
          );
          zones.push(singleZone);
        }

        setFishingZones(zones);
        setLodging(payload);
      } catch (error) {
        console.error(error);
      }
    }
    detailLodging();
  }, [id]);

  return (
    <>
      {lodging !== undefined ? (
        <div>
          <h1>{lodging.name}</h1>
          {lodging.image.map((image, i) => (
            <img key={i} src={image} alt={lodging.name} />
          ))}
          <p>{lodging.description}</p>
          {lodging.services.map((service, i) => (
            <p key={i}>{service}</p>
          ))}
          <p>{lodging.price} € / noche</p>
        </div>
      ) : (
        <div></div>
      )}
      <h1>Zonas de pesca</h1>
      {fishingZones ? (
        fishingZones.map((zone) => (
          <div key={zone.id}>
            <h1>{zone.name}</h1>
            <img src={zone.image} alt={zone.name} />
            <button onClick={() => navegate(`/fishing-zones/${zone.id}`)}>
              Ver zona
            </button>
          </div>
        ))
      ) : (
        <></>
      )}
      <button onClick={() => navegate(location.state.previousPath)}>
        Volver a {location.state.title}
      </button>
    </>
  );
};

export default LodgingDetail;
