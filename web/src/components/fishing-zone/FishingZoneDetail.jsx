import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useNavigate, useParams } from "react-router-dom";

const FishingZoneDetail = () => {
  const [fishingZone, setFishingZone] = useState();
  const { action } = useParanaAventuraContext();
  const { id } = useParams();
  const navegate = useNavigate();

  useEffect(() => {
    async function detailFishingZone() {
      try {
        const payload = await action.handleFishingZoneContext("DETAIL", id);
        setFishingZone(payload);
      } catch (error) {
        console.error(error);
      }
    }
    detailFishingZone();
  }, [id]);

  return (
    <>
      {fishingZone !== undefined ? (
        <div>
          <h1>{fishingZone.name}</h1>
          <img src={fishingZone.image} alt={fishingZone.name} />
          <p>{fishingZone.description}</p>

          <div>
            <h1>Hospedajes</h1>
            {fishingZone.lodgings.map((lodging) => (
              <div key={lodging.id}>
                {lodging.image.map((image, i) => (
                  <img key={i} src={image} alt={lodging.name} />
                ))}
                <h1>{lodging.name}</h1>
                {lodging.services.map((service, i) => (
                  <p key={i}>{service}</p>
                ))}
                <button
                  onClick={() =>
                    navegate(`/lodgings/${lodging.id}`, {
                      state: {
                        previousPath: location.pathname,
                        title: "Zona de pesca",
                      },
                    })
                  }
                >
                  Ver hospedaje
                </button>
              </div>
            ))}
          </div>

          <div>
            <h1>Peces de la zona</h1>
            {fishingZone.fish.map((fish) => (
              <div key={fish.id}>
                <img src={fish.image} alt={fish.name} />
                <h1>{fish.name}</h1>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <button onClick={() => navegate("/fishing-zones")}>
        Volver a Zonas de Pesca
      </button>
    </>
  );
};

export default FishingZoneDetail;
