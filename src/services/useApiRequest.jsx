import React from "react";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { fetchStart, getApiCardSuccess } from "../helper/CardSlice";
import { fetchFail } from "../helper/AuthSlice";
import axios from "axios";

const useApiRequest = () => {
  const { axiosToken, AxiosPublic } = useAxios();
  const dispatch = useDispatch();

  const getInfo = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get( `${process.env.REACT_APP_BASE_URL}/blogs`);
      dispatch(getApiCardSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getInfo };
};

export default useApiRequest;
