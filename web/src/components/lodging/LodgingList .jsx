import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useNavigate } from "react-router-dom";

const LodgingList = () => {
  const [lodgings, setLodgings] = useState();
  const { action } = useParanaAventuraContext();
  const navegate = useNavigate();

  useEffect(() => {
    async function listLodgings() {
      try {
        const payload = await action.handleLodgingContext("LIST");
        setLodgings(payload);
      } catch (error) {
        console.error(error);
      }
    }
    listLodgings();
  }, []);

  return (
    <>
      {lodgings ? (
        lodgings?.map((lodging) => (
          <div key={lodging.id}>
            <h1>{lodging.name}</h1>
            {lodging.image?.map((image, i) => (
              <img key={i} src={image} alt={lodging.name} />
            ))}

            {lodging.services?.map((service, i) => (
              <p key={i}>{service}</p>
            ))}

            <button
              onClick={() =>
                navegate(`/lodgings/${lodging.id}`, {
                  state: {
                    previousPath: location.pathname,
                    title: "Hospedajes",
                  },
                })
              }
            >
              Ver Hospedaje
            </button>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
};

export default LodgingList;
