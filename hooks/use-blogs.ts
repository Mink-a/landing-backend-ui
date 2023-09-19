import axios from "axios";
import { useQuery } from "@tanstack/react-query";

async function getPosts() {
  const res = await axios.get("https://6p5gy6-4000.csb.app/posts");
  return res.data;
}

async function getPostById(id: string) {
  const res = await axios.get(`https://6p5gy6-4000.csb.app/posts/${id}`);
  return res.data;
}

export async function updatePost(data: any) {
  const res = await axios.put(
    `https://6p5gy6-4000.csb.app/posts/${data.id}`,
    data
  );
  return res;
}

export async function addPost(data: any) {
  const res = await axios.post(`https://6p5gy6-4000.csb.app/posts/`, data);
  return res;
}

export async function deletePost(id: string) {
  const res = await axios.delete(`https://6p5gy6-4000.csb.app/posts/${id}`);
  return res;
}

export function useFetchAllBlogs() {
  return useQuery(["blogs"], getPosts);
}

export function useFetchBlogById(id: string) {
  return useQuery(["blogs", id], () => getPostById(id));
}
