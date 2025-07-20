import { Link } from "@tanstack/react-router";
import React from "react";
import type { NYTArticle } from "@/hooks/news-hook";
import dayjs from "dayjs";

type Props = {
  data: NYTArticle;
};

const NewsCard: React.FC<Props> = ({ data }) => {
  return (
    <Link target="_blank" to="/news/$slug" params={{ slug: data._id }} className="">
      <div className="border-none shadow-none w-full aspect-video p-0 relative text-white rounded-lg overflow-hidden hover:shadow-lg duration-300 hover:text-sky-100! group">
        <img
          src={
            data.multimedia?.default?.url || "https://via.placeholder.com/150"
          }
          alt={data.headline.main}
          className="w-full h-full object-cover object-center rounded-lg brightness-90 group-hover:scale-110 group-hover:brightness-100 duration-300"
        />
        <div className="absolute top-0 left-0 p-3 w-full h-full flex flex-col justify-between">
          <div className="flex justify-between relative z-20">
            <p className="text-xs my-1">
              {dayjs(data.pub_date).format("MMMM D, YYYY")}
            </p>
            <div className="px-2 py-1 w-fit bg-sky-400 text-white! text-[10px] rounded-full">
              {data.section_name}
            </div>
          </div>

          <div className="w-30 aspect-square bg-gray-800 opacity-50 blur-lg absolute top-0 -left-10 -translate-y-1/2 -translate-z-1/2 rounded-full"></div>
          <div className="w-full h-3/4 bg-black opacity-90 blur-lg absolute bottom-0 left-0 translate-y-1/4 rounded-b-lg"></div>
          <div className="relative z-10 2xl:p-5">
            <h2 className="text-base line-clamp-1 font-bold">
              {data.headline.main}
            </h2>
            <p className="line-clamp-2 text-xs text-justify">
              {data.abstract || data.snippet || "No description available."}
            </p>
            <div className="text-[8px] lg:text-[10px] mt-4 flex justify-end gap-2">
              {data.keywords.slice(0, 2).map((keyword) => (
                <span
                  className="italic text-white"
                  key={keyword.value}
                >
                  #{keyword.value}
                </span>
              ))}
              {data.keywords.length > 2 && (
                <span className="italic text-white">
                  +{data.keywords.length - 2} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
