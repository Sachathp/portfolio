import axios from "axios";

const API_URL = "http://localhost:1338/api/projects";

export const fetchProjects = async () => {
  const response = await axios.get(API_URL);
  return response.data.data; 
};

export const fetchProjectBySlug = async (slug) => {
  const response = await axios.get(`${API_URL}?filters[slug][$eq]=${slug}`);
  return response.data.data[0]; 
};


