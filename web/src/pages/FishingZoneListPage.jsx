import FishingZoneList from "../components/fishing-zone/FishingZoneList";

const FishingZoneListPage = () => {
  return (
    <>
      <div className="fishing-container shadow-[0px_0px_15px_10px]">
        <div className="fishing-text-container">
          <h1 className="fishing-page-h1">Zonas</h1>
          <h1 className="fishing-page-h1">de</h1>
          <h1 className="fishing-page-h1">pesca</h1>
        </div>
      </div>
      <div className="fishing-page-container">
        <FishingZoneList />
      </div>
    </>
  );
};

export default FishingZoneListPage;
