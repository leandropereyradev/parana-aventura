import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useLocation, useNavigate } from "react-router-dom";

const FishingZoneList = () => {
  const [fishingZones, setFishingZones] = useState();
  const { action } = useParanaAventuraContext();

  const navegate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function listFishingZones() {
      try {
        const payload = await action.handleFishingZoneContext("LIST");
        setFishingZones(payload);
      } catch (error) {
        console.error(error);
      }
    }
    listFishingZones();
  }, []);

  return (
    <>
      {fishingZones !== undefined ? (
        fishingZones?.map((fishingZone) => (
          <div key={fishingZone.id}>
            <h1>{fishingZone.name}</h1>
            <img src={fishingZone.image} alt={fishingZone.name} />
            <p>{fishingZone.description.substring(0, 220) + "..."}</p>
            <button
              onClick={() => navegate(`/fishing-zones/${fishingZone.id}`)}
            >
              Ver zona
            </button>

            <div>
              <h1>Hospedajes</h1>
              {fishingZone.lodgings.map((lodging) => (
                <div key={lodging.id}>
                  <img src={lodging.image[0]} alt={lodging.name} />
                  <h1>{lodging.name}</h1>
                  {lodging.services.map((service, i) => (
                    <p key={i}>{service}</p>
                  ))}
                  <button
                    onClick={() =>
                      navegate(`/lodgings/${lodging.id}`, {
                        state: {
                          previousPath: location.pathname,
                          title: "Zonas de pesca",
                        },
                      })
                    }
                  >
                    Ver hospedaje
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

export default FishingZoneList;
