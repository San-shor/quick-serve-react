import { CirclePlus } from "lucide-react";
import { Suspense, useActionState, useState } from "react";
import workerService from "../../services/workerService";
import createServiceAction from "../../utils/workerAction";
import { FormInput } from "../ui/FormInput";
import ServiceList from "./ServiceList";

function Service() {
  const servicePromise = workerService.getServices();

  const [state, formAction, isPending] = useActionState(
    createServiceAction,
    null
  );
  const [showForm, setShowForm] = useState(false);
  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="w-full max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Services</h3>
            <p className="text-sm text-gray-500 mt-1">
              Manage your service offerings
            </p>
          </div>
          <button onClick={handleFormToggle} disabled={isPending}>
            <CirclePlus className="w-5 h-5" />
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <form action={formAction}>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
                <div className="flex-1 w-full">
                  <FormInput
                    name="name"
                    placeholder="Enter service name (e.g., Plumbing, Cleaning, etc.)"
                    required
                    error={state?.errors?.name}
                    disabled={isPending}
                  />
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 transition-colors min-w-[120px]"
                  >
                    {isPending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Creating...
                      </>
                    ) : (
                      "Create"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleFormToggle}
                    disabled={isPending}
                    className="flex-1 sm:flex-none px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 transition-colors min-w-[100px]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            All Services
          </h4>
          <Suspense
            fallback={
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-600">Loading Services...</span>
              </div>
            }
          >
            <ServiceList servicePromise={servicePromise} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Service;
