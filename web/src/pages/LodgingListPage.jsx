import LodgingList from "../components/lodging/LodgingList ";

const LodgingListPage = () => {
  return (
    <>
      <div className="lodgings-container shadow-[0px_0px_15px_10px]">
        <div className="lodgings-title-container">
          <h1 className="lodgings-title-h1">Hospedajes</h1>
        </div>
      </div>
      <div className="lodgings-section-container">
        <LodgingList />
      </div>
    </>
  );
};

export default LodgingListPage;
