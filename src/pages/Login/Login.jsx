import "./login.css";
import { useNavigate } from "react-router-dom";
import LoginLayout from "../../components/loginLayout";
import TextInput from "../../components/textInput/textInput";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { login } from "../../utilities/fetchServer";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addLoginUser } from "../../redux/features/user";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleLogin = async () => {
    try {
      let loginData = await login(email, password);
      if (loginData) {
        dispatch(addLoginUser(loginData));
        toast.success("email and password correct ");
        window.localStorage.setItem("voithy-token", loginData.id);
        navigate("/dashboard");
      } else {
        toast.error("email or password are wrong !");
      }
    } catch (error) {
      toast.error("email or password are wrong wrong !");
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
            onClick={handleLogin}
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
