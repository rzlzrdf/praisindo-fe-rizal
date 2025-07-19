import { Link } from "@tanstack/react-router";
import React from "react";
import { Card, CardDescription, CardHeader } from "../ui/card";

type Props = {
  slug: string;
};

const NewsCard: React.FC<Props> = ({ slug }) => {
  return (
    <Link to="/news/$slug" params={{ slug }}>
      <Card className="shadow-sm hover:shadow-md duration-200 transition-all">
        <CardHeader className="mb-0 pb-0 border-b">
          <h2 className="text-xl line-clamp-1 font-semibold">Lorem ipsum dolor sit amet consectetur.</h2>
        </CardHeader>
        <CardDescription className="pb-3 px-5">
          <p className="line-clamp-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            excepturi architecto nisi perferendis aut! Natus assumenda commodi
            sapiente est laborum deleniti optio similique! Quas, repellendus
            beatae? A voluptatem aliquam, rem itaque cumque, reiciendis nulla,
            ducimus delectus incidunt omnis pariatur debitis!
          </p>
        </CardDescription>
      </Card>
    </Link>
  );
};

export default NewsCard;
