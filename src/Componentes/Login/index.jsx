import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMensaje("Debes completar todos los campos.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMensaje("Inicio de sesión exitoso ✅");
      navigate("/Personajes");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.code);
      if (error.code === "auth/invalid-credential") {
        setMensaje("Correo o contraseña incorrectos.");
      } else {
        setMensaje(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Login;
