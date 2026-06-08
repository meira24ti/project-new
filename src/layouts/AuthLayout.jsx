// src/layouts/AuthLayout.jsx
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div id="auth-container" className="bg-gray-100 min-h-screen flex items-center justify-center">
            <Outlet />
        </div>
    );
}