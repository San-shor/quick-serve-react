import workerService from "../services/workerService";
import { workerValidationSchema } from "../validations/workerValidation";

export const submitWorkerData = async (prevState, formData) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const serviceTypeArray = formData.getAll("service_type[]");

    const values = Object.fromEntries(formData);

    const imageUrl = values.imageUrl || "";

    await workerValidationSchema.validate(
      { ...values, service_type: serviceTypeArray },
      { abortEarly: false }
    );

    const workerData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      age: values.age ? parseInt(values.age) : null,

      expertise_of_service: values.expertise_of_service
        ? parseInt(values.expertise_of_service)
        : null,
      shift: values.shift,
      rating: values.rating ? parseInt(values.rating) : null,

      service_type: serviceTypeArray,
      image: imageUrl || null,
    };

    const response = await workerService.createWorker(workerData);

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

    if (error.message) {
      return {
        success: false,
        message: error.message,
        errors: {},
        data: null,
      };
    }
  }
};

export default async function createServiceAction(prevState, formData) {
  try {
    const name = formData.get("name")?.trim();

    if (!name) {
      return {
        success: false,
        message: "Service name is required",
        errors: { name: "Service name is required" },
        data: null,
      };
    }

    const response = await workerService.createService({ name });

    return {
      success: true,
      message: "Service created successfully!",
      errors: {},
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to create service",
      errors: {},
      data: null,
    };
  }
}
