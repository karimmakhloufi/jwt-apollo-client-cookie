import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button
        onClick={() => {
          console.log(email);
          console.log(password);
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;
