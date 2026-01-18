import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import toast from "react-hot-toast";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/admin");
        } catch (error) {
            toast.error("Credenciales invalidas")
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 to-amber-50">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm space-y-4"
            >
                <h2 className="text-2xl font-bold text-center text-amber-700">
                    Admin Login
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded-xl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full border p-3 rounded-xl"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full bg-amber-500 text-white py-3 rounded-xl font-bold"
                >
                    Ingresar
                </button>
            </form>
        </div>
    );
}
