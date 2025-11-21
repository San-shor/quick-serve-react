import { X } from "lucide-react";
import { use } from "react";

function ServiceList({ servicePromise }) {
  const services = use(servicePromise);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {services.data.map((service, index) => (
        <div
          key={index}
          className="group relative bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-blue-400 hover:shadow-md transition-all duration-200 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-800 font-medium">{service.name}</span>
            <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceList;
