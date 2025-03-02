import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  params: Params;
}

const Page: React.FC<Props> = ({ params }) => {
  return <div>{params.slug}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Générez les chemins dynamiques ici
  return {
    paths: [], // Remplacez par vos chemins
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      params,
    },
  };
};

export default Page;
