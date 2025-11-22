const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api",
  endpoints: {
    workers: {
      create: "/workers",
      getAll: "/getWorkers",
    },
    auth: {
      signUp: "/signup",
      login: "/login",
    },
    services: {
      getServices: "/getServices",
      createService: "/service",
      updateService: "/service",
      deleteService: "/service",
    },
  },
  timeout: 10000,
};

export default API_CONFIG;
