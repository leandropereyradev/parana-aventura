import FishesList from "../components/fish/FishesList";

const FishListPage = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="fish-container shadow-[0px_0px_15px_10px]">
        <div className="fish-text-container">
          <h1 className="fish-page-h1">Peces</h1>
          <h1 className="fish-page-h1">del</h1>
          <h1 className="fish-page-h1">Paraná</h1>
        </div>
      </div>
      <div className="fish-page-container">
        <FishesList />
      </div>
    </>
  );
};

export default FishListPage;
