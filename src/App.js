import LocomotiveScrollCustom from "@context/LocomotiveScrollCustom";
import TransitionColorProvider from "@context/TransitionColorContext";
import Page404 from "@pages/404";
import ClubsPage from "@pages/Clubs";
import DeveloperPage from "@pages/Developer";
import GooglePage from "@pages/Google";
import Home from "@pages/Home";
import StudentPage from "@pages/Student";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollCustom containerRef={containerRef}>
      <TransitionColorProvider>
        <main data-scroll-container ref={containerRef}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/google" element={<GooglePage />} />
              <Route path="/developer" element={<DeveloperPage />} />
              <Route path="/student" element={<StudentPage />} />
              <Route path="/clubs" element={<ClubsPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/404" element={<Page404 />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </AnimatePresence>
        </main>
      </TransitionColorProvider>
    </LocomotiveScrollCustom>
  );
}

export default App;
