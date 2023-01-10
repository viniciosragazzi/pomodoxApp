import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AppPage from "../../pages/app";
import WelcomePage from "../../pages/welcomePage";
const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
