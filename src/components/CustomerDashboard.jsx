import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const CustomerDashboard = () => {
  const { user } = use(AuthContext);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Worker Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
    </div>
  );
};

export default CustomerDashboard;
