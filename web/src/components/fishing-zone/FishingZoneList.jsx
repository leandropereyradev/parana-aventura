import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useNavigate } from "react-router-dom";

const FishingZoneList = () => {
  const [fishingZones, setFishingZones] = useState();
  const { action } = useParanaAventuraContext();

  const navegate = useNavigate();

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
          <div key={fishingZone.id} className="mb-10">
            <div className="fishing-section-container">
              <h1 className="fishing-section-h1">{fishingZone.name}</h1>
              <div className="fishing-section-data-container">
                <img
                  src={fishingZone.image}
                  alt={fishingZone.name}
                  className="w-full"
                />
                <div className="fishing-section-data-text-container">
                  <p className="fishing-section-data-text-p">
                    {fishingZone.description.substring(0, 220) + "..."}
                  </p>
                  <button
                    className="fishing-section-data-text-btn"
                    onClick={() => navegate(`/fishing-zones/${fishingZone.id}`)}
                  >
                    Ver zona
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-3 lg:gap-4">
              {fishingZone.lodgings?.map((lodging) => (
                <div
                  key={lodging.id}
                  className="fishing-section-lodging-container"
                >
                  <img
                    src={lodging.image[0]}
                    alt={lodging.name}
                    className="w-full"
                  />
                  <h1 className="fishing-section-lodging-h1">{lodging.name}</h1>
                  <div className="fishing-section-lodging-services-container">
                    {lodging.services?.map((service, i) => (
                      <p key={i} className="fishing-section-lodging-services-p">
                        {service}
                      </p>
                    ))}
                  </div>
                  <button
                    onClick={() => navegate(`/lodgings/${lodging.id}`)}
                    className="fishing-section-lodging-services-btn"
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
