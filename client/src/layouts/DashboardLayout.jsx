import { Link } from "react-router-dom";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}

      <div className="w-[250px] bg-zinc-900 p-5">
        <h1 className="text-2xl font-bold mb-10">
          Admin Panel
        </h1>

        <div className="flex flex-col gap-4">
          <Link to="/admin/dashboard">
            Dashboard
          </Link>

          <Link to="/admin/projects">
            Projects
          </Link>
        </div>
      </div>

      {/* Main Content */}

      <div className="flex-1 p-10 bg-black">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;