import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-[#0b0b13] pt-24 pb-10 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                {/* TOP */}
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* BRAND */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-12 h-12 rounded-2xl bg-hijau flex items-center justify-center font-bold text-xl">
                                S
                            </div>

                            <div>
                                <h2 className="font-bold text-xl">
                                    Sedap
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Food Marketplace
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-500 leading-8">
                            Platform kuliner modern dengan pengalaman
                            premium dan tampilan futuristik.
                        </p>
                    </div>

                    {/* MENU */}
                    <div>
                        <h3 className="text-xl font-bold mb-5">
                            Menu
                        </h3>

                        <ul className="space-y-4 text-gray-500">
                            <li>Beranda</li>
                            <li>Tentang</li>
                            <li>Menu</li>
                            <li>Promo</li>
                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <h3 className="text-xl font-bold mb-5">
                            Support
                        </h3>

                        <ul className="space-y-4 text-gray-500">
                            <li>FAQ</li>
                            <li>Help Center</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </div>

                    {/* SOCIAL */}
                    <div>
                        <h3 className="text-xl font-bold mb-5">
                            Sosial Media
                        </h3>

                        <div className="flex gap-4">
                            {[
                                FaFacebook,
                                FaTwitter,
                                FaInstagram,
                                FaLinkedin,
                                FaEnvelope
                            ].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 rounded-2xl bg-[#1a1a2e] flex items-center justify-center hover:bg-hijau transition"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="border-t border-white/5 pt-8 text-center text-gray-600">
                    ©2025 Sedap Marketplace. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}