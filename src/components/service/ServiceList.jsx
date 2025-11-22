import { X } from "lucide-react";
import { use, useState, useTransition } from "react";
import workerService from "../../services/workerService";

function ServiceList({ servicePromise }) {
  const initialServices = use(servicePromise);

  const [services, setServices] = useState(initialServices);
  const [isPending, startTransition] = useTransition();
  console.log(services);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this service?")) {
      return;
    }
    const previousServices = services;
    setServices({
      ...services,
      data: services.data.filter((service) => service.id !== id),
    });

    startTransition(async () => {
      try {
        await workerService.deleteService(id);
      } catch (error) {
        console.error("Failed to delete service:", error);
        alert("Failed to delete service. Please try again.");

        setServices(previousServices);
      }
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {services.data.map((service, index) => (
        <div
          key={index}
          className="group relative bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-blue-400 hover:shadow-md transition-all duration-200 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-800 font-medium">{service.name}</span>
            <button
              onClick={() => handleDelete(service.id)}
              disabled={isPending}
              className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceList;
