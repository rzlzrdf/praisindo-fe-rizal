import { getAllNews, getSearchNews } from "@/lib/fetcher/news";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";

export interface FilterNews {
  page: number;
}

export interface NYTArticle {
  abstract: string;
  byline: {
    original: string;
  };
  document_type: string;
  headline: {
    main: string;
    kicker?: string;
    print_headline?: string;
  };
  _id: string;
  keywords: NYTKeyword[];
  multimedia: NYTMultimedia;
  news_desk: string;
  print_page: string;
  print_section: string;
  pub_date: string;
  section_name: string;
  snippet: string;
  source: string;
  subsection_name: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
}

export interface NYTKeyword {
  name: string;
  value: string;
  rank: number;
}

export interface NYTMultimedia {
  caption: string;
  credit: string;
  default: {
    url: string;
    height: number;
    width: number;
  };
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
}

export interface NYTArticleSearchResponse {
  docs: NYTArticle[];
  metadata: {
    hits: number;
    offset: number;
    time: number;
  };
}

export const useNews = (filters: FilterNews) => {
  return useQuery<NYTArticleSearchResponse>({
    queryKey: ["news", filters],
    queryFn: () => getAllNews(filters),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export const useSearchNews = (filters: { search: string; page: number }) => {
  return useInfiniteQuery<NYTArticleSearchResponse>({
    queryKey: ["news", filters.search],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) =>
      getSearchNews({ ...filters, page: (pageParam as number).toString() }),
    getNextPageParam: (lastPage, allPages) => {
      const total = lastPage.metadata.hits;
      const loaded = allPages.length * 10;
      return loaded < total ? allPages.length : undefined;
    },
    placeholderData: keepPreviousData,
  });
};
