import { useActionState, useState } from "react";
import ApiService from "../../services/workerService";
import { workerValidationSchema } from "../../validations/workerValidation";
import Card from "../ui/Card";

const submitWorkerData = async (prevState, formData) => {
  console.log(formData);
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const values = Object.fromEntries(formData);

    const serviceTypeArray = formData.getAll("serviceType");
    //

    await workerValidationSchema.validate(
      { ...values, serviceType: serviceTypeArray },
      { abortEarly: false }
    );
    const workerData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      age: parseInt(values.age),
      nid: values.nid,
      service_type: serviceTypeArray,
      expertise_of_service: values.expertise,
      shift: values.shift,
      rating: parseFloat(values.rating),
      is_active: true,
      address: values.address || "",
    };
    const response = await ApiService.createWorker(workerData);
    console.log("✅ API Response:", response);
    return {
      success: true,
      message: "Worker registered successfully!",
      data: response.data || response,
      errors: {},
    };
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });

      return {
        success: false,
        message: "Please submit form with all fields",
        errors: errors,
        data: null,
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred",
      errors: {},
      data: null,
    };
  }
};

export default function CreateWorker() {
  const [preview, setPreview] = useState(null);
  const [state, formAction, isPending] = useActionState(submitWorkerData, {
    success: false,
    message: "",
    errors: {},
    data: null,
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
        Worker Profile Registration
      </h2>

      <Card
        title=""
        className="mb-6"
        bgColor="bg-gradient-to-br from-blue-25 to-white"
        borderColor="border-blue-100"
        formCard={true}
      >
        <form action={formAction}>
          {state.success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">{state.message}</p>
            </div>
          )}

          {!state.success && state.message && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">{state.message}</p>
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-800 mb-6 pb-2 border-b border-blue-100">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-600 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  {state.errors?.name && (
                    <p className="text-sm mt-1 text-red-500">
                      {state.errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-600 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  {state.errors?.email && (
                    <p className="text-sm mt-1 text-red-500">
                      {state.errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-600 font-semibold">
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  {state.errors?.age && (
                    <p className="text-sm mt-1 text-red-500">
                      {state.errors.age}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-600 font-semibold">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  {state.errors?.phone && (
                    <p className="text-sm mt-1 text-red-500">
                      {state.errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-600 font-semibold">
                    NID Number *
                  </label>
                  <input
                    type="text"
                    name="nid"
                    placeholder="NID Number"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  {state.errors?.nid && (
                    <p className="text-sm mt-1 text-red-500">
                      {state.errors.nid}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-600 font-semibold">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full border border-gray-300 p-3 rounded-lg bg-white text-gray-700 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {preview && (
                    <div className="mt-3">
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-6 pb-2 border-b border-green-100">
              Service Information
            </h3>

            <div className="mb-6">
              <label className="block text-sm mb-3 text-gray-600 font-semibold">
                Service Type *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Cleaning", "Plumbing", "Electrician", "Cooking"].map(
                  (type) => (
                    <label
                      key={type}
                      className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer bg-white"
                    >
                      <input
                        type="checkbox"
                        name="serviceType"
                        value={type}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {type}
                      </span>
                    </label>
                  )
                )}
              </div>
              {state.errors?.serviceType && (
                <p className="text-sm mt-2 text-red-500">
                  {state.errors.serviceType}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm mb-2 text-gray-600 font-semibold">
                  Expertise Level (1-10) *
                </label>
                <input
                  type="number"
                  name="expertise"
                  placeholder="Enter 1-10"
                  min="1"
                  max="10"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                />
                {state.errors?.expertise && (
                  <p className="text-sm mt-1 text-red-500">
                    {state.errors.expertise}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-600 font-semibold">
                  Preferred Shift *
                </label>
                <select
                  name="shift"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select Shift</option>
                  <option value="Day">Day Shift</option>
                  <option value="Night">Night Shift</option>
                  <option value="Flexible">Flexible</option>
                </select>
                {state.errors?.shift && (
                  <p className="text-sm mt-1 text-red-500">
                    {state.errors.shift}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-600 font-semibold">
                  Self Rating (1-5) *
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="Enter 1-5"
                  min="1"
                  max="5"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors"
                />
                {state.errors?.rating && (
                  <p className="text-sm mt-1 text-red-500">
                    {state.errors.rating}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-6 border-t border-gray-100">
            <button
              disabled={isPending}
              type="submit"
              className="px-8 py-3 rounded-lg text-white font-semibold transition-all duration-200 hover:shadow-lg cursor-pointer bg-blue-600 hover:bg-blue-700 min-w-48 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isPending ? "Registering..." : "Register Worker"}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
