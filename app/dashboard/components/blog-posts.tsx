"use client";
import { useFetchAllBlogs } from "@/hooks/use-blogs";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import EditModal from "./edit-modal";
import { DeleteAlert } from "./delete-alert";

function BlogPosts() {
  const { data, isLoading } = useFetchAllBlogs();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="">
      <EditModal />
      <DeleteAlert />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default BlogPosts;
