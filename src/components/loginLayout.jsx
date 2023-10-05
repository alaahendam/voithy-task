const LoginLayout = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <img
        src="/images/login-bg.jpg"
        alt=""
        srcset=""
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
          filter: "blur(10px)",
        }}
      />
      {children}
    </div>
  );
};
export default LoginLayout;
