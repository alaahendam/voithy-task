import { useNavigate } from "react-router-dom";
import LoginLayout from "../../components/loginLayout";
import "./signUp.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextInput from "../../components/textInput/textInput";
import Typography from "@mui/material/Typography";
import { signUp } from "../../utilities/fetchServer";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { addLoginUser } from "../../redux/features/user";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [type, setType] = useState("patient");
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  // const [avilabledates, setAvilabledates] = useState([]);
  // let dateOfweek = [
  //   "Saturday",
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  // ];
  const handleSignUp = async () => {
    try {
      let data = await signUp(name, email, password, type);
      if (data.id) {
        window.localStorage.setItem("voithy-token", data.id);
        dispatch(addLoginUser(data));
        navigate("/dashboard");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  if (window.localStorage.getItem("voithy-token")) {
    navigate("/dashboard");
  }
  return (
    <LoginLayout>
      <div className="login">
        <img
          src="images/logo.png"
          alt=""
          style={{
            width: "60px",
            height: "60px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />
        <div className="loginForm">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor:
                  type == "patient" ? "rgb(97, 197, 247)" : "white",
                color: type == "patient" ? "white" : "rgb(97, 197, 247)",
                marginTop: "10px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
              onClick={() => setType("patient")}
            >
              Patient
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor:
                  type == "doctor" ? "rgb(97, 197, 247)" : "white",
                color: type == "doctor" ? "white" : "rgb(97, 197, 247)",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              onClick={() => setType("doctor")}
            >
              Doctor
            </Button>
          </div>
          <TextInput label="Name" value={name} setState={setName} />
          <TextInput label="Email address" value={email} setState={setEmail} />
          <TextInput
            label="Password"
            type={"password"}
            value={password}
            setState={setPassword}
          />
          <TextInput
            label="Confirm Password"
            type={"password"}
            value={confirmPassword}
            setState={setConfirmPassword}
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgb(97, 197, 247)",
              color: "white",
              marginTop: "10px",
              marginBottom: "10px",
              marginRight: "10px",
            }}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Typography
            textAlign="center"
            sx={{
              fontSize: "17px",
              fontWeight: "500",
              color: "gray",
              display: "inline",
            }}
          >
            have an account?{""}
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "500",
                color: "rgb(97, 197, 247)",
                display: "inline",
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")}
            >
              Sign In
            </Typography>
          </Typography>
        </div>
      </div>
    </LoginLayout>
  );
};
export default SignUp;
