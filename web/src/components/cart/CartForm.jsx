import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiUpArrowCircle } from "react-icons/bi";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const initialTogleState = {
  date: true,
  people: false,
  aditionals: false,
};

const initialValue = {
  date: {
    from: new Date(),
    to: null,
    nights: 1,
    price: 0,
  },
  people: 0,
  aditionals: [],
  lodging: "",
  total_price: 0,
};

const CartForm = () => {
  const [lodging, setLodging] = useState();
  const [togle, setTogle] = useState(initialTogleState);
  const [selectedLodging, setSelectedLodging] = useState(initialValue);

  const { action } = useParanaAventuraContext();

  const navegate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function detailLodging() {
      try {
        const payload = await action.handleLodgingContext("DETAIL", id);

        for (const comments of payload.commentsLodging) {
          const user = await action.handleUserContext("DETAIL", comments.user);
          comments.user = user;
        }

        const fishingZones = [];
        for (const zone of payload.fishingZone) {
          const singleZone = await action.handleFishingZoneContext(
            "DETAIL",
            zone
          );
          fishingZones.push(singleZone);
        }
        payload.fishingZone = fishingZones;

        setLodging(payload);
      } catch (error) {
        console.error(error);
      }
    }

    detailLodging();
  }, [id]);

  const handleClickNext = (keyToChange, action) => {
    const keys = ["date", "people", "aditionals"];
    const currentIndex = keys.indexOf(keyToChange);
    let state = { ...togle };

    if (action === "next") {
      state[keyToChange] = false;

      const nextIndex = (currentIndex + 1) % keys.length;
      state[keys[nextIndex]] = true;
    }

    if (action === "previous") {
      state[keyToChange] = false;

      const previousIndex = (currentIndex - 1 + keys.length) % keys.length;
      state[keys[previousIndex]] = true;
      keyToChange = keys[previousIndex];
    }

    setTogle(state);
  };

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    const nights = Math.ceil(
      (end?.getTime() - start?.getTime()) / 1000 / 60 / 60 / 24
    );

    setSelectedLodging((prev) => ({
      ...prev,
      date: {
        from: start,
        to: end,
        nights,
      },
      lodging: lodging.id,
    }));
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    switch (name) {
      case "checkbox":
        let price;
        switch (value) {
          case "taxi":
            price = 20;
            break;
          case "escursion":
          case "lancha":
            price = 38;
            break;
          case "desayuno":
            price = 8;
            break;
          case "almuerzo":
            price = 15;
            break;
          case "cena":
            price = 18;
            break;
          default:
            break;
        }
        setSelectedLodging((prev) => ({
          ...prev,
          aditionals: checked
            ? [
                ...prev.aditionals,
                {
                  aditional: value,
                  price: price,
                },
              ]
            : prev.aditionals.filter(
                (aditional) => aditional.aditional !== value
              ),
        }));
        break;
      case "people":
        setSelectedLodging((prev) => ({
          ...prev,
          people: value,
        }));
        break;
      default:
        break;
    }
  };

  const calculateTotal = () => {
    let total = 0;

    selectedLodging.aditionals.forEach((aditional) => {
      if (aditional.aditional == "taxi" || aditional.aditional == "escursion") {
        total += aditional.price * parseInt(selectedLodging.people);
      } else if (aditional.aditional == "lancha") {
        total += aditional.price * (selectedLodging.date.nights + 1);
      } else {
        total +=
          aditional.price *
          parseInt(selectedLodging.people) *
          (selectedLodging.date.nights + 1);
      }
    });

    total +=
      selectedLodging.date.nights * lodging.price * selectedLodging.people;

    return total;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const total = calculateTotal();

    try {
      await action.handleBookingContext("BOOKING", {
        ...selectedLodging,
        total_price: total,
      });

      navegate("/me");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {togle.date && (
        <div className="cart-form-input-container">
          <h3 className="cart-form-input-h3">Elige una fecha</h3>
          <DatePicker
            selected={selectedLodging.date.from}
            onChange={onChangeDate}
            startDate={selectedLodging.date.from}
            endDate={selectedLodging.date.to}
            selectsRange
            inline
            required
          />
          <button
            type="button"
            className="cart-form-input-btnNext"
            onClick={() => handleClickNext("date", "next")}
          >
            ¡Continuemos!
          </button>
        </div>
      )}
      {togle.people && (
        <div className="cart-form-input-container">
          <h3 className="cart-form-input-h3">
            ¿Cuántas personas vendrán a disfrutar de Paraná Aventura?
          </h3>
          <input
            type="number"
            min="1"
            name="people"
            value={selectedLodging.people}
            onChange={handleChange}
            className="cart-form-input-number"
          />
          <div className="cart-form-input-btn-container">
            <button
              type="button"
              className="cart-form-input-btnNext"
              onClick={() => handleClickNext("people", "next")}
            >
              ¡Continuemos!
            </button>
            <button
              type="button"
              onClick={() => handleClickNext("people", "previous")}
            >
              <BiUpArrowCircle className="cart-form-input-btnPrev" />
            </button>
          </div>
        </div>
      )}
      {togle.aditionals && (
        <div className="cart-form-input-container">
          <div>
            <h3 className="cart-form-input-h3">
              Elige servicios adicionales para tu estadía
            </h3>
            <p className="cart-form-input-p">
              Los precios son por persona una sóla vez. Las comidas son por
              persona y por día.
            </p>
          </div>
          <div className="cart-form-checks-container">
            <div className="cart-form-checks-label-container">
              <label htmlFor="taxi" className="cart-form-checks-label">
                <input
                  type="checkbox"
                  id="taxi"
                  value="taxi"
                  onChange={handleChange}
                  name="checkbox"
                />
                Lancha Taxi ida y vuelta
              </label>
              <p className="mt-1">€ 20</p>
            </div>
            <div className="cart-form-checks-label-container">
              <label htmlFor="escursion" className="gap-3 text-xl lg:text-lg">
                <input
                  type="checkbox"
                  id="escursion"
                  value="escursion"
                  onChange={handleChange}
                  name="checkbox"
                  className="mr-4"
                />
                Escursión por la zona de pesca en lancha y caminata por las
                islas
              </label>
              <p className="mt-1">€ 38</p>
            </div>
            <div className="cart-form-checks-label-container">
              <label htmlFor="lancha" className="cart-form-checks-label">
                <input
                  type="checkbox"
                  id="lancha"
                  value="lancha"
                  onChange={handleChange}
                  name="checkbox"
                />
                Lancha de pesca
              </label>
              <p className="mt-1">€ 38</p>
            </div>
            <div className="cart-form-checks-label-container">
              <label htmlFor="desayuno" className="cart-form-checks-label">
                <input
                  type="checkbox"
                  id="desayuno"
                  value="desayuno"
                  onChange={handleChange}
                  name="checkbox"
                />
                Desayuno
              </label>
              <p className="mt-1">€ 8</p>
            </div>
            <div className="cart-form-checks-label-container">
              <label htmlFor="almuerzo" className="cart-form-checks-label">
                <input
                  type="checkbox"
                  id="almuerzo"
                  value="almuerzo"
                  onChange={handleChange}
                  name="checkbox"
                />
                Almuerzo
              </label>
              <p className="mt-1">€ 15</p>
            </div>
            <div className="cart-form-checks-label-container">
              <label htmlFor="cena" className="cart-form-checks-label">
                <input
                  type="checkbox"
                  id="cena"
                  value="cena"
                  onChange={handleChange}
                  name="checkbox"
                />
                Cena
              </label>
              <p className="mt-1">€ 18</p>
            </div>
          </div>
          <div className="cart-form-input-btn-container">
            <button type="submit" className="cart-form-input-btnNext">
              ¡Reservar alojamiento!
            </button>
            <button
              type="button"
              onClick={() => handleClickNext("aditionals", "previous")}
            >
              <BiUpArrowCircle className="cart-form-input-btnPrev" />
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default CartForm;
