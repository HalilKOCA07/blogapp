import useAxios from "./useAxios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStart,
  getApiCardSuccess,
  getApiCommentsSuccess,
} from "../helper/CardSlice";
import { fetchFail } from "../helper/AuthSlice";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useParams } from "react-router-dom";

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

  const getComments = async (path = "comments") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosToken.get(`/${path}`);
      const commentsInfo = data.data;
      console.log(commentsInfo)
      getApiCommentsSuccess({path, commentsInfo});
      toastSuccessNotify(`${path} basariliyla eklenmiştir.`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${path} eklenememiştir.`);
      console.log(error);
    }
  };
  // const getComments = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_BASE_URL}/comments`,
  //       {
  //         headers:{Authorization: `Token ${token}`},
  //       }
  //     );
  //     const commentsInfo = data.data;
  //     getApiCommentsSuccess({ commentsInfo });
  //     toastSuccessNotify(`comments basariliyla eklenmiştir.`);
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify(`comments eklenememiştir.`);
  //     console.log(error);
  //   }
  // };

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

  return { getInfo, postNewBlog, putBlogInfo, getComments };
};
export default useApiRequest;
