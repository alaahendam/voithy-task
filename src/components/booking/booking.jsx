import "./booking.css";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import {
  addAppointment,
  getAppointments,
  sendEmail,
} from "../../utilities/fetchServer";
import { useDispatch } from "react-redux";
import { addAppointments } from "../../redux/features/appointments";
const Booking = ({ name, email }) => {
  const dispatch = useDispatch();
  let date = new Date();
  const handleAddApoointment = async () => {
    addAppointment({ name, email, date: date.toISOString() });
    dispatch(
      addAppointments(
        await getAppointments(window.localStorage.getItem("voithy-token"))
      )
    );
    sendEmail(name, email, "new patient make appointment");
  };
  return (
    <div className="booking">
      <div style={{ display: "flex", alignItems: "center" }}>
        <PersonIcon
          style={{
            fontSize: "45px",
            color: "gray",
          }}
        />
        <div>
          <h3>{name}</h3>
        </div>
      </div>
      <Button
        variant="contained"
        style={{
          backgroundColor: "rgb(97, 197, 247)",
          color: "white",
          fontSize: "12px",
        }}
        onClick={handleAddApoointment}
      >
        Book
      </Button>
    </div>
  );
};
export default Booking;
