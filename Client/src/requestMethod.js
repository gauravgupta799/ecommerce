import axios  from "axios";

const BASE_URL = "http://localhost:8800/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDFlYjBkMDg0MjZmMDA0ZDk0N2RlNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTU3MDg5OSwiZXhwIjoxNjY1NjU3Mjk5fQ.D6rUbKWd6UwVYm0MdmKNwAsC1bJrbLQBxt55uON94bQ";

 export const publicRequest = axios.create({
    baseUrl: BASE_URL,
 });

 export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header:{ token: `Bearer ${TOKEN}`}
 })

