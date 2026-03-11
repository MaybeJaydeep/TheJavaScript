import { useAuth } from ".../context/AuthContext";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const handleLoginUser = () => {
    login("user");
    navigate(from, { replace: true });
  };

  const handleLoginAdmin = () => {
    login("admin");
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLoginUser}>Login as User</button>
      <button onClick={handleLoginAdmin}>Login as Admin</button>
    </div>
  );
};

export default Login;