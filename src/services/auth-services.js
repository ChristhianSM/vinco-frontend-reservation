import axios from "axios";
import { BASE_URI } from "../config";

export const session_login = async (credentials) => {
    const res = await axios.post(`${BASE_URI}/auth/login`, credentials);
    return res.data
}
