"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface BlogPostData {
  title: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;
  const [data, setData] = useState<BlogPostData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (slug) {
        const response = await fetch(`/api/blog/${slug}`);
        const result = await response.json();
        setData(result);
      }
    };

    fetchData();
  }, [slug]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <h1>{data.title}</h1>; // S'assurer que le heading est bien là
};

export default Page;
