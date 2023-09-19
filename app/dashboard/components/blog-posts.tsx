"use client";
import { useFetchAllBlogs } from "@/hooks/use-blogs";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import MyModal from "./edit-modal";

function BlogPosts() {
  const { data, isLoading } = useFetchAllBlogs();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="py-10">
      <MyModal />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default BlogPosts;
