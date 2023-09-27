import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://landing-backend-alpha.vercel.app/api/v1/posts";

async function getPosts() {
  const res = await axios.get(`${BASE_URL}`);
  return res.data;
}

async function getPostById(id: string) {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
}

export async function updatePost(data: any) {
  const res = await axios.put(`${BASE_URL}/${data._id}`, data);
  return res.data;
}

export async function addPost(data: any) {
  const res = await axios.post(`${BASE_URL}`, data);
  console.log(res.data);
  return res.data;
}

export async function deletePost(id: string) {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
}

export function useFetchAllBlogs() {
  return useQuery(["blogs"], getPosts);
}

export function useFetchBlogById(id: string) {
  return useQuery(["blogs", id], () => getPostById(id));
}
