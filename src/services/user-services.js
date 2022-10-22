import axios from "axios";
import { BASE_URI } from "../config";

export const registerUser = async (credentials) => {
    const res = await axios.post(`${BASE_URI}/auth/register`, credentials);
    return res.data
}
