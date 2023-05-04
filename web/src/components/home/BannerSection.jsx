const BannerSection = ({ title, text }) => {
  return (
    <div className="home-bannerTurismo-container">
      <div className="home-banner-blur">
        <div className="home-banner-text-container">
          <h2 className="home-banner-text-h2 ">{title}</h2>
          <p className="home-banner-text-p">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
