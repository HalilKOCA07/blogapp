import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchStart } from '../helper/CardSlice'
import { fetchFail, loginSuccess, logoutSuccess } from '../helper/AuthSlice'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'
import useAxios from './useAxios'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const useAuthRequest = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {AxiosPublic, axiosToken} = useAxios

    const login = async (userInfo) => {
        dispatch(fetchStart())
        try{
            const {data} = await axios.post( `${process.env.REACT_APP_BASE_URL}/auth/login`, userInfo)
            dispatch(loginSuccess(data))
            toastSuccessNotify("Login is valid")
            navigate("/auth")
        }catch(error){
            dispatch(fetchFail())
            toastErrorNotify("Login is invalid")
            console.log("Login Invalid", error)
        }
    }

    const logout = async () => {
        dispatch(fetchStart());
        try{
            await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout`)
            dispatch(logoutSuccess())
            navigate("/login")
        }catch(error){
            dispatch(fetchFail())
            console.log("logout invalid", error)
        }
    }
  return{login, logout}
}

export default useAuthRequest
