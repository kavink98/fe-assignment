import axios from "axios";

const baseURL = 'http://localhost:3001'

export const getData = async (path) => {
    const res = await axios.get(baseURL + path);
    console.log(res);
    return res.data;
}

export const postData = async (path, data) => {
    const res = await axios.post(baseURL + path, data)
    return res.data;
}