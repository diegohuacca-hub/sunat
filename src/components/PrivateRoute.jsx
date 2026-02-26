import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function PrivateRoute({ children }) {
  const user = auth.currentUser;

  if (!user || !user.emailVerified) {
    return <Navigate to="/login" />;
  }

  return children;
}
