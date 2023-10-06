import "./Dashboard.css";
import PatientDashboard from "./patientDashboard";
import DoctorDashboard from "./doctorDashboard";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="menu">Menu</div>
      <div className="whiteContainer">
        <PatientDashboard />
      </div>
    </div>
  );
};
export default Dashboard;
