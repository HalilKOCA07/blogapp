import React from "react";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { fetchStart, getApiCardSuccess } from "../helper/CardSlice";
import { fetchFail } from "../helper/AuthSlice";

const useApiRequest = () => {
  const { axiosToken, AxiosPublic } = useAxios();
  const dispatch = useDispatch();

  const getInfo = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await AxiosPublic.get("/blogs");
      const stockData = data.data;
      dispatch(getApiCardSuccess({ stockData}));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getInfo };
};

export default useApiRequest;
