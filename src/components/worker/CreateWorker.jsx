import { useFormik } from "formik";
import { useState } from "react";
import { workerValidationSchema } from "../../validations/workerValidation";

export default function CreateWorker() {
  const [preview, setPreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      image: "",
      age: "",
      nid: "",
      serviceType: [],
      expertise: "",
      shift: "",
      rating: "",
      feedback: "",
    },
    validationSchema: workerValidationSchema,
    onSubmit: (values) => {
      console.log("✅ Form Submitted:", values);
      alert("Form submitted successfully!");
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("image", file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleCheckboxChange = (value) => {
    const selected = new Set(formik.values.serviceType);
    if (selected.has(value)) selected.delete(value);
    else selected.add(value);
    formik.setFieldValue("serviceType", Array.from(selected));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
        Service Registration
      </h2>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            {...formik.getFieldProps("name")}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            {...formik.getFieldProps("email")}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            {...formik.getFieldProps("phone")}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-500 text-sm">{formik.errors.phone}</p>
          )}
        </div>

        {/* Image */}
        <div>
          <label className="text-gray-600 text-sm">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 w-20 h-20 object-cover rounded-md border"
            />
          )}
        </div>

        {/* Age */}
        <div>
          <input
            type="number"
            name="age"
            placeholder="Age"
            {...formik.getFieldProps("age")}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {formik.touched.age && formik.errors.age && (
            <p className="text-red-500 text-sm">{formik.errors.age}</p>
          )}
        </div>

        {/* NID */}
        <div>
          <input
            type="text"
            name="nid"
            placeholder="NID Number"
            {...formik.getFieldProps("nid")}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {formik.touched.nid && formik.errors.nid && (
            <p className="text-red-500 text-sm">{formik.errors.nid}</p>
          )}
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">
            Service Type
          </label>
          <div className="flex flex-wrap gap-2">
            {["Cleaning", "Plumbing", "Electrician", "Cooking"].map((type) => (
              <label key={type} className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  value={type}
                  checked={formik.values.serviceType.includes(type)}
                  onChange={() => handleCheckboxChange(type)}
                />
                <span className="text-gray-700 text-sm">{type}</span>
              </label>
            ))}
          </div>
          {formik.touched.serviceType && formik.errors.serviceType && (
            <p className="text-red-500 text-sm">{formik.errors.serviceType}</p>
          )}
        </div>

        {/* Expertise */}
        <div>
          <input
            type="number"
            name="expertise"
            placeholder="Expertise (1-10)"
            {...formik.getFieldProps("expertise")}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {formik.touched.expertise && formik.errors.expertise && (
            <p className="text-red-500 text-sm">{formik.errors.expertise}</p>
          )}
        </div>

        {/* Shift */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">Shift</label>
          <select
            name="shift"
            {...formik.getFieldProps("shift")}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Select Shift</option>
            <option value="Day">Day</option>
            <option value="Night">Night</option>
          </select>
          {formik.touched.shift && formik.errors.shift && (
            <p className="text-red-500 text-sm">{formik.errors.shift}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            {...formik.getFieldProps("rating")}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {formik.touched.rating && formik.errors.rating && (
            <p className="text-red-500 text-sm">{formik.errors.rating}</p>
          )}
        </div>

        {/* Feedback */}
        <div>
          <textarea
            name="feedback"
            placeholder="Feedback (optional)"
            {...formik.getFieldProps("feedback")}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
          {formik.touched.feedback && formik.errors.feedback && (
            <p className="text-red-500 text-sm">{formik.errors.feedback}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
