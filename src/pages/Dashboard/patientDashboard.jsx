import "./Dashboard.css";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const PatientDashboard = () => {
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
        <div className="appointment"></div>
      </div>
      <div className="rightSide"></div>
    </div>
  );
};
export default PatientDashboard;
