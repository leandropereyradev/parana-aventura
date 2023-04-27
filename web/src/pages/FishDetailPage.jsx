import { useState } from "react";
import FishesDetail from "../components/fish/FishesDetail";

const FishDetailPage = () => {
  window.scrollTo(0, 0);

  const [title, setTitle] = useState();

  const handleTitle = (title) => {
    if (title) {
      setTitle(title);
    }
  };

  return (
    <div>
      <div className="fish-detail-container shadow-[0px_0px_15px_10px]">
        <div className="fish-detail-blur-container">
          <div className="fish-detail-title-container">
            <h1 className="fish-detail-title-h1">{title}</h1>
          </div>
        </div>
      </div>

      <div className="fish-detail-fish-container">
        <FishesDetail setTitle={handleTitle} />
      </div>
    </div>
  );
};

export default FishDetailPage;
