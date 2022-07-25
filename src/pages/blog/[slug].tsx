import { GetServerSideProps, NextPage } from 'next';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { Layout } from '@layouts/*';
import { addApolloState, initializeApollo } from 'apollo/client';
import {
  BlogDetailsDocument,
  BlogDetailsQueryResult,
  useBlogDetailsQuery,
} from 'apollo/generated/types';
import { RichText } from 'prismic-reactjs';

import { route } from '@helper/routes';

interface BlogArticlePageProps {
  slug: string;
}

const BlogArticlePage: NextPage<BlogArticlePageProps> = ({ slug }) => {
  const { data: article } = useBlogDetailsQuery({ variables: { slug } });

  return (
    <>
      <NextSeo title={`${article?.blog_entry?.title}`} />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Homepage',
            item: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          },
          {
            position: 2,
            name: 'Blog',
            item: `${process.env.NEXT_PUBLIC_BASE_URL}${route.blog()}`,
          },
          {
            position: 3,
            name: article?.blog_entry?.title,
            item: `${process.env.NEXT_PUBLIC_BASE_URL}${route.blogDetail(
              slug
            )}`,
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
              {article?.blog_entry?.title}
            </Heading>
            <Text my={4} align="center" fontSize="sm">
              Writte on{' '}
              <strong>
                {new Date(
                  article?.blog_entry?._meta.firstPublicationDate
                ).toDateString()}
              </strong>
            </Text>
            <Box fontSize="xl" my={8}>
              {RichText.render(article?.blog_entry?.excerpt)}
            </Box>
            <div className="content">
              {RichText.render(article?.blog_entry?.content)}
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

  const article: BlogDetailsQueryResult = await apolloClient.query({
    query: BlogDetailsDocument,
    variables: {
      slug: query.slug,
    },
  });

  if (!article.data?.blog_entry) {
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

export default BlogArticlePage;
