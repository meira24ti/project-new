import React, { lazy } from "react";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Guest from "./pages/Guest";
import Notes from "./pages/Notes";
import { Route, Routes } from "react-router-dom";
import "./assets/tailwind.css";

function App() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <div id="main-content" className="flex-1 p-4">
          <Routes>
            {/* Main Layout - dengan Sidebar & Header */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="products" element={<Products />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/products/:id" element={<ProductDetail />} /> 
            </Route>

            {/* Auth Layout - halaman login/register */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot" element={<Forgot />} />
            </Route>

            {/* Guest Layout - landing page publik */}
            <Route element={<GuestLayout />}>
              <Route path="/guest" element={<Guest />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
