import { NavLink } from "react-router-dom";
import { useAuth } from ".../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/about">About</NavLink> |{" "}
      {isAuthenticated && <NavLink to="/dashboard">Dashboard</NavLink>} |{" "}
      {isAuthenticated && <NavLink to="/profile">Profile</NavLink>} |{" "}
      {user?.role === "admin" && <NavLink to="/admin">Admin</NavLink>} |{" "}
      {!isAuthenticated ? (
        <NavLink to="/login">Login</NavLink>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  );
};

export default Navbar;