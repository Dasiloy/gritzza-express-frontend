import axios from "axios";
import { signIn } from "utils/sign-in";
import { getCookie } from "cookies-next";
import { redirect } from "utils/redirect";

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_ROOT}/api`,
});

apiClient.interceptors.request.use(
  async config => {
    // attach bearere token to request header if we have it

    const token = getCookie("token");
    console.log("token", token);
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    // trigger this only on the client side
    if (typeof window !== "undefined") {
      if (error.response.status === 401) {
        await signIn();
      }
      if (error.response.status === 403) {
        await redirect();
      }
    }
    return Promise.reject(error); // reject the promise
  }
);

export default apiClient;
