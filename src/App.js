import Page404 from "@pages/404";
import ClubsPage from "@pages/Clubs";
import DeveloperPage from "@pages/Developer";
import GooglePage from "@pages/Google";
import Home from "@pages/Home";
import StudentPage from "@pages/Students";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/google" element={<GooglePage />} />
      <Route path="/developer" element={<DeveloperPage />} />
      <Route path="/student" element={<StudentPage />} />
      <Route path="/clubs" element={<ClubsPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;
