import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import ZoneCard from "../cards/ZoneCard";
import LodgingCard from "../cards/LodgingCard";

const FishingZoneList = () => {
  window.scrollTo(0, 0);

  const [fishingZones, setFishingZones] = useState();
  const { action } = useParanaAventuraContext();

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
    <div className="mb-10">
      {fishingZones !== undefined ? (
        fishingZones?.map((fishingZone) => (
          <>
            <div
              key={fishingZone.id}
              className="w-11/12 mx-auto fullHD:max-w-7xl"
            >
              <ZoneCard {...fishingZone} />
            </div>
            <div className="w-11/12 mx-auto mb-16 lg:grid lg:grid-cols-3 lg:gap-x-4 fullHD:mb-32 fullHD:gap-x-24">
              {fishingZone.lodgings?.map((lodging) => (
                <LodgingCard key={lodging.id} {...lodging} />
              ))}
            </div>
          </>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default FishingZoneList;
