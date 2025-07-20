import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const DEFAULT_PAGE_INDEX = 1,
  DEFAULT_PAGE_SIZE = 10;
export type Filter = {
  search?: string;
}

export const cleanEmptyParams = <T extends Record<string, unknown>>(
  search: T
) => {
  const newSearch = { ...search };
  Object.keys(newSearch).forEach((key) => {
    const value = newSearch[key];
    if (
      value === undefined ||
      value === "" ||
      (typeof value === "number" && isNaN(value))
    )
      delete newSearch[key];
  });

  if (search.pageIndex === DEFAULT_PAGE_INDEX) delete newSearch.pageIndex;
  if (search.pageSize === DEFAULT_PAGE_SIZE) delete newSearch.pageSize;

  return newSearch;
};
export type PaginationParams = { pageIndex: number; pageSize: number };
export type SortParams = { sortBy: `${string}.${"asc" | "desc"}` };

export type Filters<T> = Partial<T & PaginationParams & SortParams>;
