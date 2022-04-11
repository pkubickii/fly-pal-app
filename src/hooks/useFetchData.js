import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchData = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(props);
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};
