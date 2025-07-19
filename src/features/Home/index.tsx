import NewsCard from "@/components/custom/NewsCard";
import { Input } from "@/components/ui/input";
import React from "react";

const index: React.FC = () => {
  return (
    <div className="pt-10">
      <div className="flex items-center justify-center">
        <img src="/praisindo.webp" alt="Logo" className="w-10 aspect-square" />
        <h1 className="text-2xl font-bold ml-4 text-blue-900">News</h1>
      </div>
      <div className="mb-20 mt-5 w-full flex justify-center">
        <Input
          placeholder="Search..."
          className="my-5 max-w-[700px] bg-white focus:ring-offset-0 focus:ring-0 placeholder:text-sm"
        />
      </div>
      <h2 className="text-xl font-semibold pl-3 mb-4 text-blue-900">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-4 2xl:gap-5 mb-5">
        <NewsCard slug="news-1" />
        <NewsCard slug="news-2" />
        <NewsCard slug="news-3" />
        <NewsCard slug="news-4" />
        <NewsCard slug="news-4" />
        <NewsCard slug="news-4" />
        <NewsCard slug="news-4" />
        <NewsCard slug="news-4" />
        <NewsCard slug="news-4" />
        <NewsCard slug="news-4" />
        <NewsCard slug="news-4" />
        <NewsCard slug="news-4" />
      </div>
    </div>
  );
};

export default index;
