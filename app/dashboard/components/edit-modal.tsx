import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useFetchBlogById } from "@/hooks/use-blogs";
import { useModalStore } from "@/store/modal-store";
import { EditForm } from "./editForm";

function EditModal() {
  const open = useModalStore((state) => state.open);
  const setOpen = useModalStore((state) => state.setOpen);
  const postId = useModalStore((state) => state.postId);
  const { data, isLoading } = useFetchBlogById(postId);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Edit post</DialogTitle>
        </DialogHeader>
        {!isLoading ? <EditForm data={data} /> : <p>loading...</p>}
      </DialogContent>
    </Dialog>
  );
}

export default EditModal;
