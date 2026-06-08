import { Outlet } from "react-router-dom";
import Navbar from "../components/guest/Navbar";
import Footer from "../components/guest/Footer";

export default function GuestLayout({ children }) {
    return (
        <div className="bg-[#0f0f19] text-white min-h-screen overflow-hidden">
            
            {/* BACKGROUND EFFECT */}
            <div className="fixed -top-50 -left-50 w-125 h-125 bg-[#00b07430] rounded-full blur-3xl pointer-events-none"></div>

            <div className="fixed -bottom-50 -right-50 w-125 h-125 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}