import workerService from '../../services/workerService';
import { workerValidationSchema } from '../../validations/workerValidation';

const submitWorkerData = async (prevState, formData) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const values = Object.fromEntries(formData);
    console.log({ values });

    const serviceTypeArray = formData.getAll('service_type[]');
    console.log({ serviceTypeArray });
    const imageFile = formData.get('image');

    await workerValidationSchema.validate(
      { ...values, service_type: serviceTypeArray, image: imageFile },
      { abortEarly: false }
    );

    const submitFormData = new FormData();

    submitFormData.append('name', values.name);
    submitFormData.append('email', values.email);
    submitFormData.append('phone', values.phone);
    submitFormData.append('age', values.age);
    submitFormData.append('nid', values.nid);
    submitFormData.append('expertise_of_service', values.expertise_of_service);
    submitFormData.append('shift', values.shift);
    submitFormData.append('rating', values.rating);

    submitFormData.append('address', values.address || '');

    // Append each service type separately so Laravel receives it as an array
    serviceTypeArray.forEach((serviceType) => {
      submitFormData.append('service_type[]', serviceType);
    });

    if (imageFile && imageFile.size > 0) {
      submitFormData.append('image', imageFile);
    }

    // console.log("Final FormData for API:");
    // for (let [key, value] of submitFormData.entries()) {
    //   console.log(key, value);
    // }

    const response = await workerService.createWorker(submitFormData);
    // console.log(response);
    // const response = await workerService.createWorker(submitFormData);

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
