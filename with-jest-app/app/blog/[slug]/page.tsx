"use client"; // Obligatoire pour un Client Component

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Correct pour récupérer le slug depuis l'URL

interface BlogPostData {
  title: string;
}

const Page: React.FC = () => {
  const pathname = usePathname(); // Récupère l'URL actuelle
  const slug = pathname ? pathname.split("/").pop() : null; // Vérification si pathname existe

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

  return <div>{data.title}</div>;
};

export default Page;
