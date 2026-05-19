import { Link } from "react-router-dom";
import { LayoutDashboard, FolderKanban } from "lucide-react";
function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}

      <div className="w-[250px] bg-zinc-900 p-5">
        <h1 className="text-2xl font-bold mb-10">Admin Panel</h1>

        <div className="flex flex-col gap-5">
          <Link to="/admin/dashboard" className="flex items-center gap-3">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link to="/admin/projects" className="flex items-center gap-3">
            <FolderKanban size={20} />
            Projects
          </Link>
        </div>
      </div>

      {/* Main Content */}

      <div className="flex-1 p-10 bg-black">{children}</div>
    </div>
  );
}

export default DashboardLayout;
