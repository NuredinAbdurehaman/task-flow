import { useState } from "react";
import { login } from "../api/auth";
import { setToken } from "../lib/storage";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    const data = await login(email, password);
    setToken(data.token);
    alert("Logged in!");
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Login</h2>
      <input className="border-2 border-gray-300 rounded-md p-2" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border-2 border-gray-300 rounded-md p-2" placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleLogin}>Login</button>
    </div>
  );
}