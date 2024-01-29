"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import { PostProvider } from "@/contexts/PostContext";

export default function Home() {
  return (
    <PostProvider>
      <div className="flex justify-center mt-5">
        <div className="container text-center">
          <Header />
          <PostList />
          <Footer />
        </div>
      </div>
    </PostProvider>
  );
}
