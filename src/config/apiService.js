const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api",
  endpoints: {
    workers: {
      create: "/workers",
      getAll: "/getWorkers",
      getById: (id) => `/workers/${id}`,
      update: (id) => `/workers/${id}`,
      delete: (id) => `/workers/${id}`,
    },
    // Add other endpoints as needed
  },
  timeout: 10000, // 10 seconds
};

export default API_CONFIG;
