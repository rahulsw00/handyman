import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPages from "./pages/LoginRegistration";
import ProfilePage from "./pages/ProflePage";
import { PhoneForwarded } from "lucide-react";

export default function App() {
  return (
    <div>
      <ProfilePage></ProfilePage>
    </div>
  );
}
