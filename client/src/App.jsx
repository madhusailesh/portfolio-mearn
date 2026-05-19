import {
  Routes,
  Route,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminProjects from "./pages/AdminProjects";

import ProtectedRoute from "./components/ProtectedRoute";

import Loader from "./components/Loader";
import MusicPlayer from "./components/MusicPlayer";
function App() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () =>
      clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <MusicPlayer />
      <Routes>
        
        {/* PUBLIC */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* ADMIN LOGIN */}

        <Route
          path="/admin/login"
          element={<Login />}
        />

        {/* ADMIN PROJECTS */}

        <Route
          path="/admin/projects"
          element={
            <ProtectedRoute>
              <AdminProjects />
            </ProtectedRoute>
          }
        />

        {/* DASHBOARD */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;