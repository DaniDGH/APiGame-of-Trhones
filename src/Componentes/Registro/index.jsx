import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/config";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMensaje("Debes completar todos los campos.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMensaje("Registro exitoso ✅");
    } catch (error) {
      console.error("Error al registrar:", error.code);
      if (error.code === "auth/email-already-in-use") {
        setMensaje("Este correo ya está registrado.");
      } else if (error.code === "auth/weak-password") {
        setMensaje("La contraseña debe tener al menos 6 caracteres.");
      } else {
        setMensaje(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Registrarse</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Register;
