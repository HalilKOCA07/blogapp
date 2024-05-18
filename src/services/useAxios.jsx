import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector(state => state.auth);

  const AxiosToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  });

  const AxiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });
  return { AxiosToken, AxiosPublic };
};

export default useAxios;
