import "./login.css";
import { useNavigate } from "react-router-dom";
import LoginLayout from "../../components/loginLayout";
import TextInput from "../../components/textInput/textInput";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
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
          <Typography
            textAlign="left"
            sx={{
              fontSize: "35px",
              fontWeight: "600",
              color: "gray",
            }}
          >
            Welcome Back!
          </Typography>
          <TextInput label="Email address" value={email} setState={setEmail} />
          <TextInput
            label="Password"
            type={"password"}
            value={password}
            setState={setPassword}
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgb(97, 197, 247)",
              color: "white",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            onClick={() => console.log("sign in")}
          >
            Sign in
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
            Don't have an account?{""}
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: "500",
                color: "rgb(97, 197, 247)",
                display: "inline",
                cursor: "pointer",
              }}
              onClick={() => navigate("/signUp")}
            >
              Sign Up
            </Typography>
          </Typography>
        </div>
      </div>
    </LoginLayout>
  );
};
export default Login;
