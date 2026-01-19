import { useEffect, useState } from "react";
import { getRSVPs } from "../services/rsvpService";
import { RSVPData } from "../types/rsvp";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [data, setData] = useState<RSVPData[]>([]);

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/adminLogin");
    };

    useEffect(() => {
        getRSVPs().then(setData);
    }, []);

    return (
        <div className="min-h-screen bg-sky-50 p-10">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-amber-700">
                    Confirmados
                </h1>

                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow-md transition-colors"
                >
                    Logout
                </button>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <table className="w-full">
                    <thead className="bg-amber-100">
                        <tr>
                            <th className="p-4 text-left">Nombre</th>
                            <th className="p-4 text-left">Apellido</th>
                            <th className="p-4 text-left">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((rsvp) => (
                            <tr key={rsvp.id} className="border-t">
                                <td className="p-4">{rsvp.firstName}</td>
                                <td className="p-4">{rsvp.lastName}</td>
                                <td className="p-4">
                                    {rsvp.createdAt?.toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
