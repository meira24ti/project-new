import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#111827cc] border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">

                {/* LOGO */}
                <Logo />

                {/* MENU */}
                <ul className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
                    {[
                        "Beranda",
                        "Tentang",
                        "Menu",
                        "Promo",
                        "Testimoni",
                        "Kontak"
                    ].map((item) => (
                        <li key={item}>
                            <a
                                href="#"
                                className="hover:text-white transition"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* AUTH */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/login"
                        className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition text-sm"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00B074] to-[#00d084] hover:scale-105 transition text-sm font-semibold shadow-lg shadow-green-500/20"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
}