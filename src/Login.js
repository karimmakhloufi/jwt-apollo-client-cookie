import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const Login = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("p4ssw0rd");
  const [addTodo, { data }] = useMutation(LOGIN);
  if (data) {
    console.log(data);
    document.cookie = "token=" + data.login;
  }
  return (
    <>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button
        onClick={async () => {
          try {
            await addTodo({ variables: { email: email, password: password } });
          } catch (err) {
            console.log("Handle me", err);
          }
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;
