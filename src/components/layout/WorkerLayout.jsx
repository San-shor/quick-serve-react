import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import colors from "../ui/color/color";

function WorkerLayout() {
  return (
    <div className="flex h-screen" style={{ background: colors.neutral[50] }}>
      <main className="flex-1 p-6 overflow-auto">
        <Toaster position="top-right" />
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default WorkerLayout;
