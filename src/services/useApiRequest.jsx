import useAxios from "./useAxios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStart,
  getApiCardSuccess,
  getApiSingleBlog,
} from "../helper/CardSlice";
import { fetchFail } from "../helper/AuthSlice";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useApiRequest = () => {
  const { user } = useSelector((state) => state.auth);
  const { axiosToken } = useAxios();
  const dispatch = useDispatch();

  const getInfo = async (path = "blogs") => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/${path}`
      );
      const blogInfo = data.data;
      dispatch(getApiCardSuccess({ blogInfo, path }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getSingleBlog = async (path) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken.get(`/${path}`);
      const singleBlog = data.data;
      console.log(singleBlog)
      dispatch(getApiSingleBlog({path, singleBlog}));
      toastSuccessNotify(`${path} basariliyla eklenmiştir.`);
      return singleBlog;
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${path} eklenememiştir.`);
      console.log(error);
      throw error; // Hata durumunda hatayı döndür
    }
  };

  const postNewBlog = async (path, info) => {
    dispatch(fetchStart());
    try {
      const response = await axiosToken.post(`/${path}/`, info);
      getInfo(path);
      toastSuccessNotify(`${path} basariliyla eklenmiştir.`);
      return response; // Sonucu döndür
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${path} eklenememiştir.`);
      console.log(error);
      throw error; // Hata durumunda hatayı döndür
    }
  };

  const putBlogInfo = async (path, info) => {
    try {
      await axiosToken.put(`/${path}/${user._id}/`, info);
      getInfo(path);
      toastSuccessNotify();
    } catch (error) {
      console.log("putBlogInfo", error);
      toastErrorNotify();
    }
  };

  return { getInfo, postNewBlog, putBlogInfo, getSingleBlog };
};
export default useApiRequest;
