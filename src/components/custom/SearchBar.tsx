import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {};

  return (
    <div className="mb-20 w-full max-w-screen flex justify-center sticky top-[5svh] lg:top-[3vh] z-30 ">
      <div className="max-w-[700px] w-full relative">
        <Input
          placeholder="Search news here.."
          className="bg-white h-[50px] border-0"
          value={search}
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
