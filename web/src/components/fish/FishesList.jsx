import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import LodgingCard from "../cards/LodgingCard";
import FishCardXL from "../cards/FishCardXL";
import ZoneCardXL from "../cards/ZoneCardXL";

const FishesList = () => {
  // window.scrollTo(0, 0);

  const [fishes, setFishes] = useState();
  const { action } = useParanaAventuraContext();

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

            updatedFishingZone.push(zone);
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
          <div key={fish.id} className="fish-list-container">
            <div>
              <FishCardXL {...fish} />

              <div className="fish-list-zone-container">
                {fish.fishingZone?.map((zone) => (
                  <ZoneCardXL key={zone.id} {...zone} />
                ))}
              </div>
            </div>

            <div className="fish-list-lodging-section shadow-[0px_0px_10px_2px]">
              <h2 className="fish-list-lodging-h2">Hospedajes de la zona</h2>

              <div className="fish-list-lodging-container">
                {fish.fishingZone?.map((zone) => {
                  return zone.lodgings.map((lodging) => (
                    <LodgingCard key={lodging.id} {...lodging} />
                  ));
                })}
              </div>
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
