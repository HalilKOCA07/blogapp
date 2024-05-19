import React from "react";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { fetchStart, getApiCardSuccess } from "../helper/CardSlice";
import { fetchFail } from "../helper/AuthSlice";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useApiRequest = () => {
  const { axiosToken, AxiosPublic } = useAxios();
  const dispatch = useDispatch();

  const getInfo = async (path = "blogs") => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get( `${process.env.REACT_APP_BASE_URL}/${path}`);
      const blogInfo = data
      dispatch(getApiCardSuccess(blogInfo, path));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const postNewBlog = async (path = "blogs", info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken.post( `/${path}/`, info);
      dispatch(getApiCardSuccess(data));
      getInfo()
      toastSuccessNotify("New Blog added successfully")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("New Blog can't be added :(")
      console.log(error);
    }
  };

  return { getInfo, postNewBlog };
};

export default useApiRequest;
