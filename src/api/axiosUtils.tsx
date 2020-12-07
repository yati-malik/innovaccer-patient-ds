import Axios from 'axios';

const axiosInstance = Axios.create({
     baseURL: "https://innovaccer-server.herokuapp.com"
}) 

export default axiosInstance;