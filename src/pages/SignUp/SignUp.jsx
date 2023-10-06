import { useNavigate } from "react-router-dom";
import LoginLayout from "../../components/loginLayout";
import "./signUp.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextInput from "../../components/textInput/textInput";
import Typography from "@mui/material/Typography";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
const SignUp = () => {
  const navigate = useNavigate();
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
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        password: password,
        type: type,
      });
      console.log("Document written with ID: ", docRef.id);
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
          srcset=""
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
          {/* <div
            style={{
              display: "flex",
            }}
          >
            <div>
              <label htmlFor="">Avilable Dates</label>
              <select name="" id="">
                {dateOfweek?.map((day) => (
                  <option value={day}>{day}</option>
                ))}
              </select>
            </div>
            <TextInput
              label="Start"
              value={confirmPassword}
              setState={setConfirmPassword}
            />
            <TextInput
              label="End"
              value={confirmPassword}
              setState={setConfirmPassword}
            />
          </div> */}
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
