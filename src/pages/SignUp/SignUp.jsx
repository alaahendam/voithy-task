import { useNavigate } from "react-router-dom";
import LoginLayout from "../../components/loginLayout";
import "./signUp.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextInput from "../../components/textInput/textInput";
import Typography from "@mui/material/Typography";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
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
                backgroundColor: "rgb(97, 197, 247)",
                color: "white",
                marginTop: "10px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
              onClick={() => console.log("sign in")}
            >
              Patient
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                color: "rgb(97, 197, 247)",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              onClick={() => console.log("sign in")}
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
            onClick={() => console.log("sign in")}
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
