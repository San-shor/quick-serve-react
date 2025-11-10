// components/WorkerList.jsx
import { useEffect, useState } from "react";
import ApiService from "../../services/workerService";
import Table from "../ui/Table";
import getShiftColor from "../utils/utils";

const WorkerList = () => {
  const [workers, setWorkers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      phone: "+1234567890",
      serviceType: "Plumbing",
      expertise: 8,
      rating: 4.5,
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "+1234567891",
      serviceType: "Cleaning",
      expertise: 9,
      rating: 4.8,
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike@example.com",
      phone: "+1234567892",
      serviceType: "Electrician",
      expertise: 7,
      rating: 4.2,
      status: "Inactive",
    },
  ]);

  useEffect(() => {
    const getAllWorkers = async () => {
      const res = await ApiService.getAllWorkers();
      console.log(res);
      setWorkers(res.data);
    };
    getAllWorkers();
  }, []);
  const workerColumns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Phone", accessor: "phone" },
    { header: "Service Type", accessor: "service_type" },
    { header: "Expertise", accessor: "expertise_of_service" },
    {
      header: "Rating",
      accessor: (item) => `${item.rating}/5`,
    },
    {
      header: "Status",
      accessor: (item) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            item.status !== "Active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {item.is_active ? "Active" : "Inactive"}
        </span>
      ),
    },
    { header: "NID", accessor: "nid" },
    {
      header: "Shift",
      accessor: (item) => {
        const shiftColors = getShiftColor(item.shift);
        return (
          <span
            style={{
              backgroundColor: shiftColors.background,
              color: shiftColors.text,
              border: `1px solid ${shiftColors.border}`,
            }}
            className="px-3 py-1 rounded-full text-xs font-medium"
          >
            {item.shift || "Not Set"}
          </span>
        );
      },
    },
    { header: "Address", accessor: "address" },
  ];

  const handleEdit = (worker) => {
    console.log("Edit worker:", worker);
  };

  const handleDelete = (worker) => {
    if (window.confirm(`Delete ${worker.name}?`)) {
      setWorkers(workers.filter((w) => w.id !== worker.id));
    }
  };

  const handleView = (worker) => {
    console.log("View worker:", worker);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Workers Management</h1>
        <p className="text-gray-600">Manage all registered workers</p>
      </div>

      <Table
        title="Workers List"
        data={workers}
        columns={workerColumns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />
    </div>
  );
};

export default WorkerList;
