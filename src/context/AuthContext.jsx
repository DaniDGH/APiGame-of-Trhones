import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Componentes/Firebase/config"; // Asegúrate que esta ruta es correcta

// Creamos el contexto
const AuthContext = createContext();

// Hook personalizado para usar el contexto en cualquier componente
export function useAuth() {
  return useContext(AuthContext);
}

// Provider que envuelve tu app y escucha los cambios de sesión
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Estado para el usuario logueado

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe(); // Limpiar el listener al desmontar
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}
