import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaArrowLeft, FaUtensils } from "react-icons/fa";

export default function Login() {
  return (
    <div
      id="login-page"
      className="min-h-screen bg-gray-100 flex items-center justify-center p-5"
    >
      <div
        id="login-card"
        className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* HEADER */}
        <div id="login-header" className="bg-hijau p-6 text-white text-center">
          <div
            id="logo-wrapper"
            className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl"
          >
            <FaUtensils />
          </div>

          <h1 id="login-title" className="text-3xl font-bold">
            Sedap
          </h1>

          <p id="login-subtitle" className="text-sm text-white/80 mt-2">
            Masuk untuk menikmati pengalaman kuliner terbaik
          </p>
        </div>

        {/* FORM */}
        <div id="login-body" className="p-8">
          <h2 id="form-title" className="text-2xl font-bold text-gray-700 mb-2">
            Login Account
          </h2>

          <p id="form-description" className="text-gray-400 text-sm mb-6">
            Silakan login menggunakan email dan password Anda.
          </p>

          <form id="login-form" className="space-y-5">
            {/* EMAIL */}
            <div id="email-group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Email
              </label>

              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-hijau">
                <FaEnvelope className="text-gray-400 mr-3" />

                <input
                  type="email"
                  id="email"
                  placeholder="Masukkan email..."
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div id="password-group">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Password
              </label>

              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-hijau">
                <FaLock className="text-gray-400 mr-3" />

                <input
                  type="password"
                  id="password"
                  placeholder="Masukkan password..."
                  className="w-full outline-none text-sm"
                />
              </div>
            </div>

            {/* OPTIONS */}
            <div
              id="login-options"
              className="flex items-center justify-between text-sm"
            >
              <label className="flex items-center gap-2 text-gray-500">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="/forgot"
                className="text-hijau hover:underline font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              id="login-button"
              className="w-full bg-hijau hover:opacity-90 transition text-white py-3 rounded-lg font-semibold"
            >
              Login
            </button>
          </form>

          {/* GUEST */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-full border-t border-gray-200"></div>

            <span className="relative bg-white px-3 text-xs text-gray-400">
              ATAU
            </span>
          </div>

          <Link
            to="/guest"
            className="w-full flex items-center justify-center border bg-black border-gray-300 hover:border-hijau hover:text-hijau transition py-3 rounded-lg font-semibold text-blue-600"
          >
            Masuk sebagai Guest
          </Link>

          {/* REGISTER */}
          <div
            id="register-link"
            className="text-center mt-6 text-sm text-gray-500"
          >
            Belum punya akun?{" "}
            <Link
              to="/register"
              className="text-hijau font-semibold hover:underline"
            >
              Register
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
