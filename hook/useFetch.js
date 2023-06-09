import { useState , useEffect } from "react";
import axios from "axios";
import {RAPID_API_KEY} from '@env'

const useFetch =  (endpoint,query)=>{
const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)
const rapidApiKey = RAPID_API_KEY;

const axios = require('axios');

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {...query},
  headers: {
    'X-RapidAPI-Key':rapidApiKey,
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};
}

const fetchData = async()=>{

  setIsLoading(true)
  try {
    const response = await axios.request(options)
    setData(response.data.data)
    setLoading(false)
    
  } catch (error) {
    setError(error)
    alert("There is an error")
    
  } finally{
    setLoading(false)
  }

  useEffect(()=>{
    fetchData();

  },[])

  const fetching = ()=>{
    setLoading(true)
    fetchData()
  }

  return {data,isLoading,error,fetching};

}

export default useFetch