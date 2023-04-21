import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useLocation, useNavigate } from "react-router-dom";

const FishesList = () => {
  const [fishes, setFishes] = useState();
  const { action } = useParanaAventuraContext();

  const navegate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function listFishes() {
      try {
        const payload = await action.handleFishContext("LIST");

        const zoneIds = [];
        const zones = [];

        for (const fish of payload) {
          for (const zoneId of fish.fishingZone) {
            if (!zoneIds.includes(zoneId)) {
              const zone = await action.handleFishingZoneContext(
                "DETAIL",
                zoneId
              );
              zones.push(zone);
              zoneIds.push(zoneId);
            }
          }
        }

        for (const fish of payload) {
          const updatedFishingZone = [];
          for (const zoneId of fish.fishingZone) {
            const zone = zones.find((zone) => zone.id === zoneId);
            updatedFishingZone.push({
              id: zone.id,
              image: zone.image,
              name: zone.name,
            });
          }
          fish.fishingZone = updatedFishingZone;
        }

        setFishes(payload);
      } catch (error) {
        console.error(error);
      }
    }

    listFishes();
  }, []);

  return (
    <>
      {fishes !== undefined ? (
        fishes?.map((fish) => (
          <div key={fish.id}>
            <h1>{fish.name}</h1>
            <img src={fish.image} alt={fish.name} />
            <p>{fish.description.substring(0, 220) + "..."}</p>
            <button
              onClick={() =>
                navegate(`/fishes/${fish.id}`, {
                  state: {
                    previousPath: location.pathname,
                    title: "Peces",
                  },
                })
              }
            >
              Ver Pez
            </button>

            <div>
              <h1>Zonas de pesca</h1>
              {fish.fishingZone?.map((zone) => (
                <div key={zone.id}>
                  <img src={zone.image} alt={zone.name} />
                  <h1>{zone.name}</h1>
                  <button
                    onClick={() =>
                      navegate(`/fishing-zones/${zone.id}`, {
                        state: {
                          previousPath: location.pathname,
                          title: "Peces",
                        },
                      })
                    }
                  >
                    Ver Zona de pesca
                  </button>
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

export default FishesList;
