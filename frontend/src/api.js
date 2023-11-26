import axios from "axios"; //a popular JavaScript library for making HTTP requests.
const instance = axios.create({
    baseURL: "http://localhost:4000/activities/", //customized instance
    headers: {
        "Content-Type": "application/json", //default headers that will be sent with every request. The content type is JSON.
    },
})
export default instance;