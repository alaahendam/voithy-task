import "./Dashboard.css";
import { useState } from "react";
import PatientDashboard from "./patientDashboard";
import DoctorDashboard from "./doctorDashboard";
import Typography from "@mui/material/Typography";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  let menu = [
    { label: "Home", value: "home" },
    { label: "Favourite", value: "favourite" },
    { label: "Setting", value: "setting" },
  ];
  if (!window.localStorage.getItem("voithy-token")) {
    navigate("/");
  }
  return (
    <div className="Dashboard">
      <div className="menu">
        <Typography
          textAlign="left"
          sx={{
            fontSize: "35px",
            fontWeight: "900",
            color: "gray",
            marginBottom: "30px",
          }}
        >
          Menu
        </Typography>
        {menu?.map((item, index) => (
          <div
            style={{
              backgroundColor:
                item.value == activeMenu ? "white" : "transparent",
              cursor: "pointer",
              height: "50px",
            }}
            key={index}
            onClick={() => setActiveMenu(item.value)}
          >
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "900",
                color: item.value == activeMenu ? "rgb(97, 197, 247)" : "gray",
                display: "inline",
              }}
            >
              {item.label}
            </Typography>
          </div>
        ))}
      </div>
      <div className="whiteContainer">
        <PatientDashboard />
      </div>
    </div>
  );
};
export default Dashboard;
