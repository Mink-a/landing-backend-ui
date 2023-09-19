import React from "react";
import DashboardNav from "./components/dashboard-nav";
import BlogPosts from "./components/blog-posts";

function DashboardHome() {
  return (
    <div className="container mx-auto">
      <DashboardNav />
      <BlogPosts />
    </div>
  );
}

export default DashboardHome;
