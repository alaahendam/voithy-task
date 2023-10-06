import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/navBar";
import LandPage from "./pages/LandPage/LandPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Toaster } from "react-hot-toast";
import privateRoute from "./utilities/privateRoute";
function App() {
  const location = useLocation();
  console.log("pathName", location.pathname);
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <img
        loading="lazy"
        src="images/Home.png"
        style={{
          height: "99vh",
          width: "100%",
          position: "absolute",
          zIndex: -1,
        }}
      />
      {location.pathname == "/login" ||
      location.pathname == "/signUp" ? null : (
        <NavBar />
      )}
      <Toaster />
      <Routes>
        <Route exact path="/" element={<LandPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/dashboard" element={privateRoute(<Dashboard />)} />
      </Routes>
    </div>
  );
}

export default App;
