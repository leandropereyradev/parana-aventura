import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import { useNavigate } from "react-router-dom";
import LodgingCard from "../cards/LodgingCard";

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
          <div key={lodging.id} className="w-11/12 mx-auto">
            <LodgingCard {...lodging} />
          </div>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
};

export default LodgingList;
