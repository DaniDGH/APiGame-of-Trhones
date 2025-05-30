import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';
import { useFavoritos } from './context/FavoritosContext.jsx';
import Personajes from './Componentes/Personajes/index.jsx';
import Casas from './Componentes/Casas/index.jsx';
import Batallas from './Componentes/Batallas/index.jsx';
import Dragones from './Componentes/Dragones/index.jsx';
import Frases from './Componentes/Frases/index.jsx';
import Temporadas from './Componentes/Temporadas/index.jsx';
import Favoritos from './Componentes/Favoritos/index.jsx';
import Register from './Componentes/Registro/index.jsx';
import Login from './Componentes/Login/index.jsx';
import LogoutButton from './Componentes/LogoutButton.jsx';
import './App.css';

function App() {
  const { user } = useAuth();
  const { favoritos } = useFavoritos();

  return (
    <Router>
      <div className="container">
        <h1>Game of Thrones App</h1>

        <nav className="navbar">
          <Link to="/Personajes">Personajes</Link>
          <Link to="/Casas">Casas</Link>
          <Link to="/Batallas">Batallas</Link>
          <Link to="/Dragones">Dragones</Link>
          <Link to="/Frases">Frases</Link>
          <Link to="/Temporadas">Temporadas</Link>
          <Link to="/Favoritos">Favoritos ({favoritos.length})</Link>

          {user ? (
            <>
              <span style={{ marginLeft: "auto", marginRight: "10px" }}>
                👤 {user.email}
              </span>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Registro</Link>
            </>
          )}
        </nav>

        <Routes>
          <Route path="/Personajes" element={<Personajes />} />
          <Route path="/Casas" element={<Casas />} />
          <Route path="/Batallas" element={<Batallas />} />
          <Route path="/Dragones" element={<Dragones />} />
          <Route path="/Frases" element={<Frases />} />
          <Route path="/Temporadas" element={<Temporadas />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
