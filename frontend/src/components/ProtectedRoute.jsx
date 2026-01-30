import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, admin }) {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;

  if (admin) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.role !== "ADMIN") return <Navigate to="/" />;
  }

  return children;
}
