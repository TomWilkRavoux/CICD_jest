interface PageProps {
  params: {
    slug: string;
  };
}

// ✅ Suppression de `"use client"`, car ce fichier est un Server Component
export default function Page({ params }: PageProps) {
  const { slug } = params;

  return <h1>Slug: {slug}</h1>; // ✅ Affichage simple et direct
}