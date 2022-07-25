import { GetServerSideProps, NextPage } from 'next';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { Box, Container, Heading } from '@chakra-ui/react';
import { Layout } from '@layouts/*';
import { addApolloState, initializeApollo } from 'apollo/client';
import {
  GenericPageDocument,
  GenericPageQueryResult,
  useGenericPageQuery,
} from 'apollo/generated/types';
import { RichText } from 'prismic-reactjs';

interface StaticPageProps {
  slug: string;
}

const StaticPage: NextPage<StaticPageProps> = ({ slug }) => {
  const { data } = useGenericPageQuery({ variables: { slug } });

  return (
    <>
      <NextSeo title={data?.generic_page?.title[0].text} />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Homepage',
            item: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          },
          {
            position: 2,
            name: data?.generic_page?.title[0].text,
            item: `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`,
          },
        ]}
      />
      <Layout>
        <Container maxWidth="container.xl" my={20}>
          <Box
            p={{ base: 4, md: 8, lg: 24 }}
            backgroundColor="whiteAlpha.200"
            borderRadius="lg"
          >
            <Heading textAlign="center" size="2xl" as="h1">
              {data?.generic_page?.title[0].text}
            </Heading>

            <div className="content">
              {RichText.render(data?.generic_page?.content)}
            </div>
          </Box>
        </Container>
      </Layout>
      <style global jsx>{`
        .content p {
          font-size: var(--chakra-fontSizes-md);
          margin-bottom: var(--chakra-space-8);
        }

        .content h2,
        .content h3 {
          font-size: var(--chakra-fontSizes-xl);
          margin-bottom: var(--chakra-space-4);
          display: block;
        }

        .content h3 {
          font-size: var(--chakra-fontSizes-lg);
        }

        .content ul {
          margin-left: var(--chakra-space-2);
          list-style: bullet;
        }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const apolloClient = initializeApollo();

  const genericPage: GenericPageQueryResult = await apolloClient.query({
    query: GenericPageDocument,
    variables: {
      slug: query.slug,
    },
  });

  if (!genericPage.data?.generic_page) {
    return {
      notFound: true,
    };
  }

  return addApolloState(apolloClient, {
    props: {
      slug: query.slug,
    },
  });
};

export default StaticPage;
