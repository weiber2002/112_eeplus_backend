import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:7000/activities/", //建立以這個為網址的local server
    headers: {
        "Content-Type": "application/json",
    },
})
export default instance;