import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaArrowLeft,
  FaUtensils,
} from "react-icons/fa";

export default function Forgot() {
  return (
    <div
      id="forgot-page"
      className="min-h-screen bg-gray-100 flex items-center justify-center p-5"
    >
      <div
        id="forgot-card"
        className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* HEADER */}
        <div className="bg-hijau p-6 text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
            <FaUtensils />
          </div>

          <h1 className="text-3xl font-bold">Sedap</h1>

          <p className="text-sm text-white/80 mt-2">
            Reset password akun Anda dengan mudah
          </p>
        </div>

        {/* BODY */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Forgot Password
          </h2>

          <p className="text-sm text-gray-400 mb-6">
            Masukkan email Anda dan kami akan mengirimkan link reset password.
          </p>

          <form className="space-y-5">
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

            <button
              type="submit"
              className="w-full bg-hijau hover:opacity-90 transition text-white py-3 rounded-lg font-semibold"
            >
              Kirim Reset Link
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-hijau text-sm"
            >
              <FaArrowLeft />
              Kembali ke Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}