import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPages from "./pages/LoginRegistration";
import Categories from "./pages/Categories";
import CategoryLandingPage from "./pages/CategoryProps";
import JobDescription from "./pages/JobDescription";
import ProfilePage from "./pages/ProflePage";
import TakeJob from "./pages/TakeJob";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
<<<<<<< HEAD
<<<<<<< HEAD
import TempNavBar from "./pages/TempNavBar";

const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <AuthPages /> },
  { path: "/categories", element: <Categories /> },
  {
    path: "/categories/:categoryId",
    element: <CategoryLandingPage categoryName="exampleCategoryName" />,
  },
  { path: "/job", element: <JobDescription /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/take-job", element: <TakeJob /> },
  { path: "/about-us", element: <AboutUs /> },
];
=======
>>>>>>> parent of 0ae08eb (update)
=======
>>>>>>> parent of 0ae08eb (update)

export default function App() {
  const router = createBrowserRouter(routes, {
    basename: import.meta.env.BASE_URL,
  });

  return (
    <Router>
<<<<<<< HEAD
<<<<<<< HEAD
      <TempNavBar />
      <Navbar />
      <Routes>{router}</Routes>
=======
=======
>>>>>>> parent of 0ae08eb (update)
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPages />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/categories/:categoryId"
          element={<CategoryLandingPage categoryName="exampleCategoryName" />}
        />
        <Route path="/job" element={<JobDescription />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/take-job" element={<TakeJob />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
>>>>>>> parent of 0ae08eb (update)
    </Router>
  );
}
