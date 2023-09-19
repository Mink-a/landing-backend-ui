"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { useUserStore } from "@/store/store";
import usePersistStore from "@/hooks/usePersistStore";
import { Button } from "@/components/ui/button";

function DashboardNav() {
  const router = useRouter();
  const userName = usePersistStore(useUserStore, (state) => state.userName);
  const logOut = useUserStore((state) => state.logOut);
  const handleLogOut = () => {
    logOut();
    router.push("/");
  };
  return (
    <div>
      {userName}
      <Button onClick={handleLogOut}>Logout</Button>
    </div>
  );
}

export default DashboardNav;
