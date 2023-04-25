import { useState } from "react";
import FishingZoneDetail from "../components/fishing-zone/FishingZoneDetail";

const FishingZoneDetailPage = () => {
  window.scrollTo(0, 0);

  const [title, setTitle] = useState();

  const handleTitle = (title) => {
    if (title) {
      let lastIndexOf = title.lastIndexOf("de");
      let secondPart = title.substring(lastIndexOf + 3);
      setTitle(secondPart.split(" "));
    }
  };

  return (
    <div>
      <div className="zone-container shadow-[0px_0px_15px_10px]">
        <div className="zone-title-container">
          <h1 className="zone-title-h1">Zona de pesca</h1>

          <div className="zone-subtitle-container">
            {title?.map((title, i) => (
              <h1 key={i} className="zone-subtitle-h1">
                {title}
              </h1>
            ))}
          </div>
        </div>
      </div>

      <div className="zone-page-container">
        <FishingZoneDetail setTitle={handleTitle} />
      </div>
    </div>
  );
};

export default FishingZoneDetailPage;
