import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./landPage.css";
const LandPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landPage">
      <div className="landPageText">
        <Typography
          textAlign="left"
          sx={{
            fontWeight: "600",
            color: "gray",
          }}
        >
          BETTER MEDICINE MANAGEMENT
        </Typography>
        <Typography
          textAlign="left"
          sx={{
            fontSize: "35px",
            fontWeight: "900",
            color: "gray",
            display: "inline",
          }}
        >
          Live Better, for {""}
          <Typography
            sx={{
              fontSize: "35px",
              fontWeight: "900",
              color: "rgb(97, 197, 247)",
              display: "inline",
            }}
          >
            Longer
          </Typography>
        </Typography>
        <Typography
          textAlign="left"
          sx={{
            fontWeight: "600",
            color: "gray",
          }}
        >
          Let us offer a helping hand toward your radiant health.
        </Typography>
        <div className="landPageButton">
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgb(97, 197, 247)",
              color: "white",
              marginTop: "10px",
            }}
            onClick={() => navigate("/dashboard")}
          >
            Get Started
          </Button>
        </div>
      </div>
      <img src="images/Doctor.png" />
    </div>
  );
};
export default LandPage;
