import React from "react";
import useAxios from "./useAxios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStart,
  getApiCardSuccess,
  getApiDetailSuccess,
} from "../helper/CardSlice";
import { fetchFail } from "../helper/AuthSlice";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useParams } from "react-router-dom";

const useApiRequest = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { axiosToken, AxiosPublic } = useAxios();
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

  const detailBlog = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken.get(`/blogs/${id}`);
      const blogDetail = data;
      dispatch(getApiDetailSuccess({ blogDetail }));
    } catch (error) {
      console.log("Detail wrong", error);
      dispatch(fetchFail());
    }
  };

  const postNewBlog = async (path, info) => {
    dispatch(fetchStart());
    try {
      await axiosToken.post(`/${path}/`, info);
      getInfo(path);
      toastSuccessNotify(`${path} basariliyla eklenmiştir.`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${path} eklenememiştir.`);
      console.log(error);
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

  return { getInfo, postNewBlog, putBlogInfo, detailBlog };
};
export default useApiRequest;
