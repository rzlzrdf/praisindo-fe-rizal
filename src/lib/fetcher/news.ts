import type { FilterNews } from "@/features/Home/hooks/news-hook";
import axios from "axios";

export const getAllNews = async (filters: FilterNews) => {
  const { page } = filters;

  //   const apiKey = process.env.API_KEY || "";

  const res = await axios({
    method: "GET",
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=VTe95kFYMBkXgtVvIxhYLS0ETnmqzajF`,
    params: {
      page: page,
    },
  });

  if (res.status != 200) {
    throw new Error("Cant get data, Petani");
  }

  return res.data.response;
};

export const getSearchNews = async (filters: {search: string, page:string}) => {
  const { search, page } = filters;

  //   const apiKey = process.env.API_KEY || "";

  const res = await axios({
    method: "GET",
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=VTe95kFYMBkXgtVvIxhYLS0ETnmqzajF`,
    params: {
      q: search,
      page: page,
    },
  });

  if (res.status != 200) {
    throw new Error("Cant get data, Petani");
  }

  return res.data.response;
};
