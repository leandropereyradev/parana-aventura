import { useState } from "react";
import LodgingDetail from "../components/lodging/LodgingDetail";

const LodgingDetailPage = () => {
  window.scrollTo(0, 0);

  const [title, setTitle] = useState();

  const handleTitle = (title) => {
    if (title) {
      setTitle(title);
    }
  };

  return (
    <div>
      <div className="lodging-page-container shadow-[0px_0px_15px_10px]">
        <div className="lodging-page-blur">
          <div className="lodging-page-title-container">
            <h1 className="lodging-page-title">{title}</h1>
          </div>
        </div>
      </div>

      <div className="lodging-page-detail-container">
        <LodgingDetail setTitle={handleTitle} />
      </div>
    </div>
  );
};

export default LodgingDetailPage;
