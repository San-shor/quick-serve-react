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
    auth: {
      signUp: "/signup",
      login: "/login",
    },
    services: {
      getServices: "/getServices",
      createService: "/service",
    },
  },
  timeout: 10000,
};

export default API_CONFIG;
