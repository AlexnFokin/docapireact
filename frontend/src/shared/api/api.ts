import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/local.storadge";

const baseURL = 'http://localhost:5000/api'

export const $api = axios.create({
    baseURL,
    headers: {
        Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY ) || ''
    }
})