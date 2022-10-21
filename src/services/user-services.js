import axios from "axios";

export const registerUser = async (credentials) => {
    const res = await axios.post("/auth/register", credentials);
    return res.data
}
