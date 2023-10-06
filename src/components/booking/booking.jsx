import "./booking.css";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";

const Booking = ({ name }) => {
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
        onClick={() => console.log("hahaha")}
      >
        Book
      </Button>
    </div>
  );
};
export default Booking;
