import { Route, Routes } from "react-router-dom";
import DeveloperPage from "./Developer";
import GooglePage from "./Google";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/google" element={<GooglePage />} />
      <Route path="/developer" element={<DeveloperPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
