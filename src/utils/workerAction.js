import workerService from '../services/workerService';
import { workerValidationSchema } from '../validations/workerValidation';

const submitWorkerData = async (prevState, formData) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const values = Object.fromEntries(formData);
    console.log({ values });

    const serviceTypeArray = formData.getAll('service_type[]');
    console.log({ serviceTypeArray });
    const imageUrl = values.imageUrl || '';

    // Validate without image file (since we're using URL now)
    await workerValidationSchema.validate(
      { ...values, service_type: serviceTypeArray },
      { abortEarly: false }
    );

    // Prepare JSON data instead of FormData
    const workerData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      age: values.age ? parseInt(values.age) : null,
      nid: values.nid,
      expertise_of_service: values.expertise_of_service
        ? parseInt(values.expertise_of_service)
        : null,
      shift: values.shift,
      rating: values.rating ? parseInt(values.rating) : null,
      address: values.address || '',
      service_type: serviceTypeArray,
      image: imageUrl || null, // Send image URL instead of file
    };

    console.log('Sending worker data:', workerData);

    const response = await workerService.createWorker(workerData);

    return {
      success: true,
      message: 'Worker registered successfully!',
      data: response.data || response,
      errors: {},
    };
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });

      return {
        success: false,
        message: 'Please submit form with all fields',
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

export default submitWorkerData;
