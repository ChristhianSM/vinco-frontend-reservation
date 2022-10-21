import axios from "axios";
import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      setloading(true);
      try {
        const response = await axios.get(url);
        setData(response.data)
      } catch (error) {
        setError(error)
      }

      setloading(false);
    };

    fetchData();
  }, [url]);
  
  const reFetch = async() => {
    setloading(true);
    try {
      const response = await axios.get(url);
      setData(response.data)
    } catch (error) {
      setError(error)
    }
    
    setloading(false);
  };

  return {
    data, 
    loading,
    error,
    reFetch
  }
}

