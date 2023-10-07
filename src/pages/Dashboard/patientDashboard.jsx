import "./Dashboard.css";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useEffect, useState } from "react";
import Appointment from "../../components/appointment/appointment";
import Booking from "../../components/booking/booking";
import Dialog from "@mui/material/Dialog";
import { useSelector, useDispatch } from "react-redux";
import { setOpenRecords } from "../../redux/features/records";
import Records from "../../components/records";
import {
  handleUploadImage,
  sendEmail,
  allDoctor,
  getAppointments,
} from "../../utilities/fetchServer";
import { addAppointments } from "../../redux/features/appointments";
import { useNavigate } from "react-router-dom";
const PatientDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openRecord = useSelector((state) => state.records.openRecords);
  console.log("openRecord", openRecord);
  const [appointment, setAppointment] = useState("next");
  const [doctors, setDoctors] = useState([]);
  const appointments = useSelector((state) => state.appointments.appointments);
  console.log(appointments);
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

  const handleCloseRecord = () => {
    dispatch(setOpenRecords(false));
  };
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    console.log(selectedImage);
    handleUploadImage(selectedImage);
    alert("upload image success !");
  };
  useEffect(() => {
    const x = async () => {
      setDoctors(await allDoctor());
      dispatch(
        addAppointments(
          await getAppointments(window.localStorage.getItem("voithy-token"))
        )
      );
    };
    x();
  }, []);
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
          <label className="upload" htmlFor="uploadRecord">
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
          </label>
          <input
            type="file"
            accept="image/*"
            id="uploadRecord"
            onChange={handleImageChange}
            style={{
              visibility: "hidden",
            }}
          />
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
            {doctors.map((user, index) => (
              <Booking {...user} key={index} />
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
        {appointments?.map((item, index) => (
          <Appointment {...item} key={index} />
        ))}
      </div>
      <Dialog
        disableScrollLock
        open={openRecord}
        onClose={handleCloseRecord}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"true"}
      >
        <Records recordsId={window.localStorage.getItem("voithy-token")} />
      </Dialog>
    </div>
  );
};
export default PatientDashboard;
