import { signOut } from "firebase/auth"; // 1. Función para cerrar sesión
import { auth } from "./Firebase/config"; // 2. El objeto de autenticación
import { useNavigate } from "react-router-dom"; // 3. Para redirigir
import React from "react";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // 🔐 Cierra sesión en Firebase
      navigate("/login");  // 🚀 Redirige al login después de cerrar
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>;
}

export default LogoutButton;
