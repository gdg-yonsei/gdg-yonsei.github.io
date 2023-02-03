import { Route, Routes } from "react-router-dom";
import GooglePage from "./Google";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/google" element={<GooglePage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
