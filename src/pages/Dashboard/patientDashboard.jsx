import "./Dashboard.css";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import Appointment from "../../components/appointment/appointment";
import Booking from "../../components/booking/booking";
import Dialog from "@mui/material/Dialog";
import { useSelector, useDispatch } from "react-redux";
import { setOpenRecords } from "../../redux/features/records";
import Records from "../../components/records";
const PatientDashboard = () => {
  const dispatch = useDispatch();
  const openRecord = useSelector((state) => state.records.openRecords);
  console.log("openRecord", openRecord);
  const [appointment, setAppointment] = useState("next");
  const users = [
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
  ];
  const doctors = [
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
    { name: "alaa" },
  ];
  const handleCloseRecord = () => {
    dispatch(setOpenRecords(false));
  };
  return (
    <div className="dashboardInfo">
      <div className="leftSide">
        <div className="records">
          <Typography
            textAlign="left"
            sx={{
              fontSize: "25px",
              fontWeight: "900",
              color: "gray",
            }}
          >
            Records
          </Typography>
          <Typography
            textAlign="left"
            sx={{
              fontSize: "22px",
              fontWeight: "600",
              color: "gray",
              display: "inline",
            }}
          >
            See Prevoius?click Here{" "}
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "600",
                color: "rgb(97, 197, 247)",
                display: "inline",
                cursor: "pointer",
              }}
              onClick={() => dispatch(setOpenRecords(true))}
            >
              Records
            </Typography>
          </Typography>
          <div className="upload">
            <CloudUploadIcon sx={{ fontSize: "40px" }} />
            <Typography
              textAlign="center"
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "gray",
              }}
            >
              Upload Record
            </Typography>
          </div>
        </div>
        <div className="appointment">
          <Typography
            textAlign="left"
            sx={{
              fontSize: "25px",
              fontWeight: "900",
              color: "gray",
            }}
          >
            Doctors
          </Typography>
          <div>
            {doctors.map((user) => (
              <Booking {...user} />
            ))}
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            textAlign="left"
            sx={{
              fontSize: "25px",
              fontWeight: "900",
              color: "gray",
            }}
          >
            Appointments
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography
              textAlign="right"
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: appointment == "next" ? "rgb(97, 197, 247)" : "gray",
                marginRight: "10px",
                cursor: "pointer",
                textDecoration: appointment == "next" ? "underline" : null,
              }}
              onClick={() => setAppointment("next")}
            >
              Next
            </Typography>
            <Typography
              textAlign="right"
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: appointment != "next" ? "rgb(97, 197, 247)" : "gray",
                cursor: "pointer",
                textDecoration: appointment != "next" ? "underline" : null,
              }}
              onClick={() => setAppointment("prevoius")}
            >
              Prevoius
            </Typography>
          </div>
        </div>
        {users.map((user) => (
          <Appointment {...user} />
        ))}
      </div>
      <Dialog
        disableScrollLock
        open={openRecord}
        onClose={handleCloseRecord}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={true}
      >
        <Records />
      </Dialog>
    </div>
  );
};
export default PatientDashboard;
