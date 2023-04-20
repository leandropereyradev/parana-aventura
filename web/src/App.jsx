import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import EditUserPage from "./pages/EditUserPage";
import FishingZoneListPage from "./pages/FishingZoneListPage";
import FishingZoneDetailPage from "./pages/FishingZoneDetailPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/user/edit" element={<EditUserPage />} />
        <Route path="/fishing-zones" element={<FishingZoneListPage />} />
        <Route path="/fishing-zones/:id" element={<FishingZoneDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
