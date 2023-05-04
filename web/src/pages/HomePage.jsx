import BannerSection from "../components/home/BannerSection";
import TextSection from "../components/home/TextSection";
import data from "../data/text_homepage";

const HomePage = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <div className="home-container shadow-[0px_0px_15px_10px]">
        <div className="home-title-container">
          <h2 className="home-title-subtitle">Bienvenidos a</h2>
          <h1 className="home-title">Paraná Aventura</h1>
        </div>
      </div>
      <div className="home-text-container">
        <p className="home-text-p">
          ¡Bienvenidos a <span className="font-semibold">Paraná Aventura!</span>{" "}
          Somos un equipo apasionado por la pesca y la naturaleza, y nuestro
          objetivo es ofrecer una experiencia única a nuestros clientes en las
          zonas de pesca del Delta del Río Paraná en Buenos Aires. Contamos con
          los mejores hospedajes en las islas y te ofrecemos acceso exclusivo a
          las mejores zonas de pesca, clubes de pesca, insumos y paseos
          turísticos. Nuestros servicios adicionales incluyen traslados en
          lancha taxi, desayunos, almuerzos y cenas para que no tengas que
          preocuparte por nada. ¡Únete a nosotros en esta aventura única en la
          naturaleza y disfruta de la pesca como nunca antes!
        </p>
      </div>

      <BannerSection
        title={data.banner.zone.title}
        text={data.banner.zone.text}
      />

      <TextSection title={data.text.fish.title} text={data.text.fish.text} />

      <TextSection
        title={data.text.lodgings.title}
        text={data.text.lodgings.text}
      />

      <TextSection
        title={data.text.installations.title}
        text={data.text.installations.text}
      />

      <BannerSection
        title={data.banner.tourism.title}
        text={data.banner.tourism.text}
      />

      <TextSection
        title={data.text.clubes.title}
        text={data.text.clubes.text}
      />

      <TextSection
        title={data.text.supplies.title}
        text={data.text.supplies.text}
      />
    </div>
  );
};

export default HomePage;
