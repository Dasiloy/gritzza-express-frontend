import axios from "axios";


const authClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_ROOT}/api/auth`,
});


export default authClient;
