import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/modal-store";
import { useFetchBlogById } from "@/hooks/use-blogs";
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
