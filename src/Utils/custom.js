import axios from "axios";

const cusFetch = axios.create({
  baseURL: `https://api.unsplash.com/`,
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
  },
});

export default cusFetch;
