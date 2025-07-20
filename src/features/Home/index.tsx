import NewsCard from "@/components/custom/NewsCard";
import React, { useEffect } from "react";
import { useSearchNews } from "../../hooks/news-hook";
import SkeletonNews from "@/components/custom/SkeletonNews";
import SearchBar from "@/components/custom/SearchBar";
import Logo from "@/components/custom/Logo";
import { useFilters } from "@/hooks/useFilters";
import { Route } from "@/routes/index";
import type { Filter } from "@/lib/utils";

const Index: React.FC = () => {
  const { filters } = useFilters(Route.id);
  const searchValue = (filters as Filter).search || "";

  // Set the initial page value, e.g., 1
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSearchNews({
      search: searchValue,
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    const sentinel = document.getElementById("sentinel");
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [data, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <>
      <div className="relative z-10">
        <Logo />
        <SearchBar />

        <h2 className="text-xl font-semibold pl-3 mb-4 text-blue-900">
          Latest News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-4 2xl:gap-5 mb-5">
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <SkeletonNews key={index} />
            ))
          ) : !data?.pages ? (
            <div className="w-full min-h-screen grid place-content-center">
              <img
                src="/error.svg"
                alt="Not Found"
                className="max-w-full h-auto"
              />
            </div>
          ) : (
            data.pages
              .flatMap((page) => page.docs)
              .map((item) => <NewsCard key={item._id} data={item} />)
          )}
        </div>
      </div>

      {/* Trigger when reach bottom */}
      <div id="sentinel" className="h-4" />
    </>
  );
};

export default Index;
