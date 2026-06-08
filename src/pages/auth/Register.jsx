import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaArrowLeft,
  FaUtensils,
} from "react-icons/fa";

export default function Register() {
  return (
    <div
      id="register-page"
      className="min-h-screen bg-gray-100 flex items-center justify-center p-5"
    >
      <div
        id="register-card"
        className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* HEADER */}
        <div className="bg-hijau p-6 text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
            <FaUtensils />
          </div>

          <h1 className="text-3xl font-bold">Sedap</h1>

          <p className="text-sm text-white/80 mt-2">
            Buat akun baru dan mulai pesan makanan favoritmu
          </p>
        </div>

        {/* BODY */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Create Account
          </h2>

          <p className="text-sm text-gray-400 mb-6">
            Lengkapi data di bawah untuk membuat akun baru.
          </p>

          <form className="space-y-5">
            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Full Name
              </label>

              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
                <FaUser className="text-gray-400 mr-3" />

                <input
                  type="text"
                  placeholder="Masukkan nama lengkap..."
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email
              </label>

              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
                <FaEnvelope className="text-gray-400 mr-3" />

                <input
                  type="email"
                  placeholder="Masukkan email..."
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Password
              </label>

              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
                <FaLock className="text-gray-400 mr-3" />

                <input
                  type="password"
                  placeholder="Masukkan password..."
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-hijau hover:opacity-90 transition text-white py-3 rounded-lg font-semibold"
            >
              Register
            </button>
          </form>

          {/* LOGIN */}
          <div className="text-center mt-6 text-sm text-gray-500">
            Sudah punya akun?{" "}
            <Link
              to="/login"
              className="text-hijau font-semibold hover:underline"
            >
              Login
            </Link>
          </div>

          {/* BACK */}
          <div className="mt-6 text-center">
            <Link
              to="/guest"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-hijau text-sm"
            >
              <FaArrowLeft />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}