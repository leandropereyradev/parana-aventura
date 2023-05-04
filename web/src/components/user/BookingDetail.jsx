import { useEffect, useState } from "react";
import { useParanaAventuraContext } from "../../context/paranaAventuraContext";
import dayjs from "dayjs";

const BookingDetail = () => {
  const [user, setUser] = useState();
  const { action, payload } = useParanaAventuraContext();

  useEffect(() => {
    async function userDetail() {
      try {
        const payloadUser = await action.handleUserContext(
          "DETAIL",
          payload?.user?.id
        );

        for (const booking of payloadUser.bookings) {
          const lodging = await action.handleLodgingContext(
            "DETAIL",
            booking.lodging
          );

          booking.lodging = lodging;
        }

        setUser(payloadUser);
      } catch (error) {
        console.error(error);
      }
    }
    userDetail();
  }, [payload]);

  return (
    <>
      {user?.bookings.map((booking, i) => (
        <div
          key={i}
          className="w-full flex flex-col bg-azulProfundo/80 rounded-lg mb-10 p-4"
        >
          <div>
            <h1 className="text-center font-bold tracking-widest text-2xl mb-4 md:text-3xl md:mb-6">
              {booking.lodging.name}
            </h1>
            <div className="bg-white h-0.5 w-11/12 mx-auto mb-4 md:mb-8 xl:mb-14" />
          </div>
          <div className="w-11/12 mx-auto md:flex md:justify-between md:items-center md:gap-6">
            <div className="flex mb-4">
              <img
                src={booking.lodging.image[0]}
                alt={booking.lodging.name}
                className="w-auto mx-auto rounded-lg md:w-80 lg:max-w-sm"
              />
            </div>
            <div className="md:h-full md:w-full md:flex md:flex-col md:justify-around md:text-xl md:gap-10">
              <div className="mb-8 text-center flex flex-col gap-3 md:mb-0 md:gap-6">
                <p>
                  Ingreso:{" "}
                  {dayjs(booking.checkin).format("DD [de] MMMM [del] YYYY")}{" "}
                </p>
                <p>
                  Egreso:{" "}
                  {dayjs(booking.checkout).format("DD [de] MMMM [del] YYYY")}{" "}
                </p>
              </div>
              <div className="flex justify-between items-center text-center md:justify-around">
                <div className="flex flex-col gap-3 md:gap-6">
                  <p>Noches: {booking.nights}</p>
                  <p>Personas: {booking.people}</p>
                </div>
                <div className="flex flex-col gap-3 md:gap-6">
                  <p>Total: € {booking.total_price}</p>
                  <p
                    className={`px-3 py-1 rounded-md ${
                      booking.paid ? "bg-green-800" : "bg-red-800"
                    }`}
                  >
                    {booking.paid ? "Abonado" : "Pendiente de Pago"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookingDetail;
