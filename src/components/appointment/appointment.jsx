import "./appointment.css";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setOpenRecords } from "../../redux/features/records";
const Appointment = ({ name }) => {
  const dispatch = useDispatch();
  let date = new Date();
  return (
    <div className="appointmentComponent">
      <div style={{ display: "flex" }}>
        <PersonIcon
          style={{
            fontSize: "45px",
            color: "gray",
          }}
        />
        <div>
          <h3>{name}</h3>
          <p>
            {date.toISOString().split("T")[0]},
            {date.toISOString().split("T")[1].split(":")[0]}:
            {date.toISOString().split("T")[1].split(":")[1]}
          </p>
        </div>
      </div>
      <Button
        variant="contained"
        style={{
          backgroundColor: "rgb(97, 197, 247)",
          color: "white",
          fontSize: "10px",
        }}
        onClick={() => dispatch(setOpenRecords(true))}
      >
        View Records
      </Button>
    </div>
  );
};
export default Appointment;
