import { useEffect } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";

const FishingZoneList = () => {
  const { action, payload } = useParanaAventuraContext();

  useEffect(() => {
    async function listFishingZones() {
      try {
        await action.handleFishingZoneContext("LIST");
      } catch (error) {
        console.error(error);
      }
    }
    listFishingZones();
  }, []);
  return (
    <>
      {payload.fishingZones ? (
        payload.fishingZones.map((fishingZone) => (
          <div key={fishingZone.id}>
            <h1>{fishingZone.name}</h1>
            <img src={fishingZone.image} alt={fishingZone.name} />
            <p>{fishingZone.description.substring(0, 220) + "..."}</p>
            <a href={`/fishing-zones/${fishingZone.id}`}>Ver zona</a>

            <div>
              <h1>Hospedajes</h1>
              {fishingZone.lodgings.map((lodging) => (
                <div key={lodging.id}>
                  <img src={lodging.image[0]} alt={lodging.name} />
                  <h1>{lodging.name}</h1>
                  {lodging.services.map((service, i) => (
                    <p key={i}>{service}</p>
                  ))}
                  <a href={`/lodgings/${lodging.id}`}>Ver hospedaje</a>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
};

export default FishingZoneList;
