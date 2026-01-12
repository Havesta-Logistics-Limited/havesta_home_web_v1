// External API endpoints (third-party services)
// Note: These use direct axios calls as they're external services
// For internal API calls, use the axiosInstance from config/axios.config.js

import axios from "axios";

const RIDER_ENDPOINTS = {
  // Countries API (external service)
  getAllCountries: async () => {
    const endpoint = "https://restcountries.com/v3.1/all";
    const response = await axios.get(endpoint);
    return response.data;
  },

  // Paystack API (external service)
  getBankNames: async () => {
    const endpoint = "https://api.paystack.co/bank?country=nigeria";
    const response = await axios.get(endpoint);

    if (response.data?.data) {
      return response.data.data.map((item) => item.name);
    }
    return [];
  },
};

export default RIDER_ENDPOINTS;