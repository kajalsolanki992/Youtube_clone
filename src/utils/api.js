import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
     
    params: {
      
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'e4c0c2d5d1msh64bac284492aeafp1b1078jsnf4dc3d4587d6',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
