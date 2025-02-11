import react from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Landing";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<RegisterAndLogout />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/landing" element={<Landing />} />
            </Routes>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
