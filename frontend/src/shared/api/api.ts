import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/local.storadge";

const bearerToken = localStorage.getItem(USER_LOCALSTORAGE_KEY ) || '';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        Authorization: `Bearer ${bearerToken}`
    }
})