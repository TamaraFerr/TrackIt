import axios from "axios"
import { BASE_URL } from "./url"

export const axiosAuthorized = () => {
    const token = window.localStorage.getItem("token")

    return axios.create({   
        headers: {Authorization: `Bearer ${token}`}, 
        baseURL: BASE_URL, 
    })
}