import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10 lg:px-8 lg:py-14">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 bg-white py-7 text-center text-sm text-slate-500">
        © 2026 TechStore. Created for CS240 Week 12 Assignment.
      </footer>
      <ScrollRestoration />
    </div>
  );
}
