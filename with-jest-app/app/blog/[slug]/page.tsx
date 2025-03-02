"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface BlogPostData {
  title: string;
}

// ✅ Correction : Supprimer `PageProps` et passer `{ params }` directement
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params; // ✅ params est bien défini ici
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

  return <h1>{data.title}</h1>; // ✅ Vérifie bien que tu as un `<h1>`
}
