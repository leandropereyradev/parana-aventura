import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useNavigate, useParams } from "react-router-dom";

const FishesDetail = () => {
  const [fish, setFish] = useState();
  const { action } = useParanaAventuraContext();
  const { id } = useParams();
  const navegate = useNavigate();

  useEffect(() => {
    async function detailFish() {
      try {
        const payload = await action.handleFishContext("DETAIL", id);
        const fishingZones = [];

        for (const zoneId of payload.fishingZone) {
          const zone = await action.handleFishingZoneContext("DETAIL", zoneId);

          fishingZones.push({
            id: zone.id,
            image: zone.image,
            name: zone.name,
            lodgings: zone.lodgings,
          });
        }

        payload.fishingZone = fishingZones;

        setFish(payload);
      } catch (error) {
        console.error(error);
      }
    }

    detailFish();
  }, [id]);

  return (
    <>
      {fish !== undefined ? (
        <div>
          <h1>{fish.name}</h1>
          <img src={fish.image} alt={fish.name} />
          <p>{fish.description}</p>

          <div>
            <h1>Hospedajes donde encontrar {fish.name}</h1>
            {fish.fishingZone?.map((zone) => {
              return zone.lodgings?.map((lodging) => (
                <div key={lodging.id}>
                  <img src={lodging.image[0]} alt={lodging.name} />
                  <h1>{lodging.name}</h1>
                  {lodging.services?.map((service, i) => (
                    <p key={i}>{service}</p>
                  ))}
                  <button onClick={() => navegate(`/lodgings/${lodging.id}`)}>
                    Ver hospedaje
                  </button>
                </div>
              ));
            })}
            <h1>Zonas de pesca del {fish.name}</h1>
            {fish.fishingZone?.map((zone) => (
              <div key={zone.id}>
                <img src={zone.image} alt={zone.name} />
                <h1>{zone.name}</h1>
                <button onClick={() => navegate(`/fishing-zones/${zone.id}`)}>
                  Ver zona
                </button>
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

export default FishesDetail;
