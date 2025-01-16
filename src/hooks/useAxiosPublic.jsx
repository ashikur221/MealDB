import axios from "axios";

const backendUrl = "https://www.themealdb.com/api/json/v1/1"


const axiosPublic = axios.create({
  baseURL : backendUrl
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic;