import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "./404";
import ClubsPage from "./Clubs";
import DeveloperPage from "./Developer";
import GooglePage from "./Google";
import Home from "./Home";
import StudentPage from "./Students";

function App() {
  return (
    <Routes>
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
