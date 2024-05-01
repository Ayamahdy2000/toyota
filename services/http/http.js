import axios from "axios";

const config = useRuntimeConfig();
const http = axios.create({
    baseURL:config.public.VUE_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
    }
})
export default http