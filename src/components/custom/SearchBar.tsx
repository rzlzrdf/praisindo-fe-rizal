import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFilters } from "@/hooks/useFilters";
import { Route } from "@/routes/index";
import type { Filter } from "@/lib/utils";

const SearchBar: React.FC = () => {
  const { setFilters, filters } = useFilters(Route.id);
  const searchValue = (filters as Filter).search || "";
  const [search, setSearch] = useState(searchValue);

  const handleSearch = () => {
    setFilters({ search: search });
  };

  return (
    <div className="mb-20 w-full max-w-screen flex justify-center sticky top-[5svh] lg:top-[3vh] z-30 ">
      <div className="max-w-[700px] w-full relative">
        <Input
          placeholder="Search news here.."
          className="bg-white h-[50px] border-0"
          value={search}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          size={"icon"}
          type="button"
          onClick={handleSearch}
          className="rounded-full absolute top-1/2 right-3 -translate-y-1/2 bg-sky-800"
        >
          <Search />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
