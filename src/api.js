import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyAzqMxbaacbBzxGFr9GzsNS_9hnMcCrblo",
  },
});

export default request;
