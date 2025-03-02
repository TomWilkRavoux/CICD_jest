import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Params {
  slug: string;
}

interface BlogPostData {
  title: string;
  // Ajoutez d'autres propriétés si nécessaire
}

const Page: React.FC = () => {
  const router = useRouter();
  const slug = router.query.slug as string; // Assurez-vous que slug est une chaîne
  const [data, setData] = useState<BlogPostData | null>(null); // Définissez le type de data

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
