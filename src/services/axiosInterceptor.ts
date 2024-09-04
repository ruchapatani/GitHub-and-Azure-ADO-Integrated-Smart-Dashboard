import axios from "axios";

export function axiosInterceptor() {
  // Request Interceptor to capture all the HTTP requests made using Axios
  axios.interceptors.request.use(
    function (config) {
      // Skip Authentication calls based on URL
      if (process.env.GITHUB_API_BASE_URL && config.url?.includes(process.env.GITHUB_API_BASE_URL)){
        return config;
      }

      // Return the config as it is without adding any Authorization headers
      return config;
    },

    function (error) {
      return Promise.reject(error);
    }
  );

  // Response Interceptor to capture the HTTP responses received through Axios HTTP requests made
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lies within the range of 2xx causes this function to trigger
      return response;
    },

    function (error) {
      // Any status codes that fall outside the range of 2xx cause this function to trigger
      return Promise.reject(error);
    }
  );
}
