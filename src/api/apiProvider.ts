import axios from "axios";

export const ApiProvider = (url: string) => {
    const instance = axios.create({
        baseURL: url,
    })

    return instance;
}
