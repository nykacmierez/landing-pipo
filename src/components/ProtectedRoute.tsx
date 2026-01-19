import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const user = auth.currentUser;

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
