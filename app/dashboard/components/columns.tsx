"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Actions from "./actions";

export type BlogPost = {
  _id: string;
  title: string;
  author: string;
  body: string;
};

export const columns: ColumnDef<BlogPost>[] = [
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "body",
    header: "Body",
    cell: ({ row }) => {
      const body = row.getValue("body") as string;
      const formattedBody = body.slice(0, 120);
      return formattedBody + "...";
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const record = row.original;

      return <Actions record={record} />;
    },
  },
];
