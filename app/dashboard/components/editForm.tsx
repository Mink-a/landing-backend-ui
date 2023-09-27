"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { updatePost } from "@/hooks/use-blogs";
import { useModalStore } from "@/store/modal-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const formSchema: any = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  body: z.string().min(2, {
    message: "Body must be at least 2 characters.",
  }),
  author: z.string().min(2),
});

export function EditForm({ data }: { data: any }) {
  const queryClient = useQueryClient();
  const setOpen = useModalStore((state) => state.setOpen);
  const mutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => queryClient.invalidateQueries(["blogs"]),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data.title,
      body: data.body,
      author: data.author,
    },
  });

  function onSubmit(fdata: z.infer<typeof formSchema>) {
    let formData = {
      ...data,
      author: fdata.author,
      title: fdata.title,
      body: fdata.body,
    };
    mutation.mutate(formData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="author" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea placeholder="body" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" onClick={() => setOpen(false)}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
