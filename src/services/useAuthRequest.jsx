import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchStart } from '../helper/CardSlice'
import { fetchFail, loginSuccess } from '../helper/AuthSlice'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'
import useAxios from './useAxios'
import axios from 'axios'

const useAuthRequest = () => {
    const dispatch = useDispatch()
    const {AxiosPublic} = useAxios

    const login = async (userInfo) => {
        dispatch(fetchStart())
        try{
            const {data} = await axios.post( `${process.env.REACT_APP_BASE_URL}/auth/login`, userInfo)
            dispatch(loginSuccess(data))
            toastSuccessNotify("Login is valid")
        }catch(error){
            dispatch(fetchFail())
            toastErrorNotify("Login is invalid")
            console.log("Login Invalid", error)
        }
    }
  return{login}
}

export default useAuthRequest
