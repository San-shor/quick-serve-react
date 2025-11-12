import { use } from "react";
import Table from "../ui/Table";
import getShiftColor from "../utils/utils";

const WorkerTable = ({ workerPromise }) => {
  const workerData = use(workerPromise);
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

  const handleDelete = () => {
    console.log("data delete");
  };

  const handleView = (worker) => {
    console.log("View worker:", worker);
  };

  return (
    <Table
      title="Workers List"
      data={workerData.data || workerData}
      columns={workerColumns}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onView={handleView}
    />
  );
};

export default WorkerTable;
