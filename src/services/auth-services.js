import axios from "axios";

export const session_login = async (credentials) => {
    const res = await axios.post("/auth/login", credentials);
    return res.data
}