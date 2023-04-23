import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserPage from "../pages/UserPage";
import FishingZoneListPage from "../pages/FishingZoneListPage";
import FishingZoneDetailPage from "../pages/FishingZoneDetailPage";
import LodgingListPage from "../pages/LodgingListPage";
import LodgingDetailPage from "../pages/LodgingDetailPage";
import FishListPage from "../pages/FishListPage";
import FishDetailPage from "../pages/FishDetailPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/me" element={<UserPage />} />
      <Route path="/fishing-zones" element={<FishingZoneListPage />} />
      <Route path="/fishing-zones/:id" element={<FishingZoneDetailPage />} />
      <Route path="/lodgings" element={<LodgingListPage />} />
      <Route path="/lodgings/:id" element={<LodgingDetailPage />} />
      <Route path="/fishes" element={<FishListPage />} />
      <Route path="/fishes/:id" element={<FishDetailPage />} />
    </Routes>
  );
};

export default AppRouter;
