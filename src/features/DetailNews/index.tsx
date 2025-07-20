import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useDetailNews } from "@/hooks/news-hook";
import { Route } from "@/routes/news/$slug";
import { Link } from "@tanstack/react-router";
import dayjs from "dayjs";

const Index = () => {
  const { slug } = Route.useParams();
  const { data, isLoading, isFetched } = useDetailNews(slug);

  if (isLoading || !isFetched) {
    return (
      <div className="min-h-screen w-full">
        <Skeleton className="h-[50px]" />
        <Skeleton className="h-[300px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
      </div>
    );
  }

  if (!data) return <div className="min-h-screen w-full">No data found</div>;

  const {
    headline,
    multimedia,
    pub_date,
    source,
    snippet,
    web_url,
    keywords,
    section_name,
  } = data.docs[0];

  return (
    <div className="relative z-10">
      <div className="py-5">
        <Link to="/">Back to Home</Link>
      </div>
      <div className="min-h-screen lg:min-h-[80vh] grid grid-cols-12 rounded-xl bg-white px-5 lg:px-10 py-10 lg:gap-10">
        <div className="col-span-12 lg:col-span-8">
          <h1 className="text-3xl font-bold">{headline.main}</h1>
          <p className="text-sm text-gray-500 mt-2">
            Published on: {dayjs(pub_date).format("MMMM D, YYYY")} by {source}
          </p>
          <div className="relative">
            <img
              src={multimedia.default.url}
              alt={headline.main}
              className="w-full aspect-video my-5 rounded-xl"
            />
            <span className="absolute top-5 right-5 bg-blue-500 px-3 py-1 rounded-xl text-white">
              {section_name}
            </span>
          </div>
          <p>{snippet}</p>
          <a href={web_url} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <Button className="w-full mt-5 cursor-pointer">Read on NYT</Button>
          </a>
        </div>
        <div className="col-span-12 lg:col-span-4">
          {keywords.length > 0 && (
            <div className="bg-gray-100 p-5 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Keywords</h2>
              <ul className="gap-3">
                {keywords.map((keyword) => (
                  <li key={keyword.value} className="text-sm">
                    #{keyword.value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
