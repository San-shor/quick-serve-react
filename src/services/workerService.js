import API_CONFIG from "../config/apiService";

class ApiService {
  constructor() {
    this.baseURL = API_CONFIG.baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  async createWorker(workerData) {
    return this.request(API_CONFIG.endpoints.workers.create, {
      method: "POST",
      body: JSON.stringify(workerData),
    });
  }

  async getAllWorkers() {
    const workerList = this.request(API_CONFIG.endpoints.workers.getAll);
    console.log(workerList);
    return workerList;
  }
}

export default new ApiService();
