import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useParams } from "react-router-dom";
import LodgingCard from "../cards/LodgingCard";
import ZoneCardXL from "../cards/ZoneCardXL";

const FishesDetail = ({ setTitle }) => {
  const [fish, setFish] = useState();
  const { action } = useParanaAventuraContext();
  const { id } = useParams();

  useEffect(() => {
    async function detailFish() {
      try {
        const payload = await action.handleFishContext("DETAIL", id);
        const fishingZones = [];

        for (const zoneId of payload.fishingZone) {
          const zone = await action.handleFishingZoneContext("DETAIL", zoneId);

          fishingZones.push(zone);
        }

        payload.fishingZone = fishingZones;

        setFish(payload);
        setTitle(payload.name);
      } catch (error) {
        console.error(error);
      }
    }

    detailFish();
  }, [id]);

  return (
    <>
      {fish !== undefined ? (
        <>
          <div className="fish-detail-fish-card-container">
            <img
              src={fish.image}
              alt={fish.name}
              className="fish-detail-fish-card-image"
            />
            <p className="fish-detail-fish-card-p">{fish.description}</p>
          </div>

          <div className="fish-detail-fish-lodging-container">
            <h1 className="fish-detail-fish-lodging-h1">
              Hospedajes donde encontrar {fish.name}
            </h1>
            <div className="fish-detail-fish-lodging-card-container">
              {fish.fishingZone?.map((zone) => {
                return zone.lodgings?.map((lodging) => (
                  <LodgingCard key={lodging.id} {...lodging} />
                ));
              })}
            </div>
          </div>

          <div className="fish-detail-fish-tips-container">
            <h1 className="fish-detail-fish-tips-h1">¡A percar se ha dicho!</h1>
            <p className="fish-detail-fish-tips-p">{fish.fishing}</p>
            <div>
              {fish.fishing_tips?.map((tip, i) => (
                <p key={i} className="fish-detail-fish-tips-p">
                  <span className="fish-detail-fish-tips-span">
                    {tip.title}
                  </span>{" "}
                  {tip.description}
                </p>
              ))}
            </div>
          </div>

          <div className="fish-detail-fish-zones-container">
            <h1 className="fish-detail-fish-zones-h1">
              Zonas de pesca del {fish.name}
            </h1>
            {fish.fishingZone?.map((zone) => (
              <ZoneCardXL key={zone.id} {...zone} />
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default FishesDetail;
