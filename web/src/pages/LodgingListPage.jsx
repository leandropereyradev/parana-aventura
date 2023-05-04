import LodgingList from "../components/lodging/LodgingList ";

const LodgingListPage = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <div className="lodgings-container shadow-[0px_0px_15px_10px]">
        <div className="lodgings-title-container">
          <h1 className="lodgings-title-h1">Hospedajes</h1>
        </div>
      </div>
      <div className="w-11/12 mx-auto text-justify flex flex-col gap-8 mt-16 md:text-2xl md:leading-relaxed md:mt-24 lg:text-xl lg:leading-relaxed xl:max-w-6xl fullHD:max-w-4xl fullHD:text-2xl fullHD:leading-relaxed">
        <p>
          En Paraná Aventura, ofrecemos una experiencia única de alojamiento en
          las hermosas islas del Delta del río Paraná. Nuestros hospedajes están
          ubicados en las mejores zonas de pesca y ofrecen una amplia variedad
          de comodidades para asegurarte una estadía placentera.
        </p>
        <p>
          Ya sea que estés buscando una casa acogedora para una escapada
          romántica o una villa espaciosa para una aventura familiar, nuestros
          hospedajes satisfarán tus necesidades. Todos nuestros hospedajes están
          diseñados para brindarte un ambiente relajante y una experiencia
          inolvidable.
        </p>
        <p>
          Además, en Paraná Aventura te ofrecemos un servicio excepcional de
          atención al cliente y soporte técnico para garantizar que tu estadía
          sea lo más cómoda y placentera posible. ¡No esperes más para reservar
          tu hospedaje en Paraná Aventura y disfrutar de la mejor aventura de
          pesca y alojamiento en el Delta del río Paraná!
        </p>
      </div>
      <div className="lodgings-section-container">
        <LodgingList />
      </div>
    </div>
  );
};

export default LodgingListPage;
