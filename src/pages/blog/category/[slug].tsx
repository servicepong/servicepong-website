import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Layout } from '@layouts/*';
import { addApolloState, initializeApollo } from 'apollo/client';
import {
  BlogDocument,
  BlogQueryResult,
  Category,
  CategoryDocument,
  CategoryQueryResult,
} from 'apollo/generated/types';

import { route } from '@helper/routes';
import { BlogCard, EmptyMessage } from '@uikit/components';

interface BlogCategoryPageProps {
  blog: BlogQueryResult;
  slug: string;
}

const BlogCategoryPage: NextPage<BlogCategoryPageProps> = ({ blog, slug }) => {
  return (
    <>
      <NextSeo title={slug} />
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
            name: slug,
            item: `${process.env.NEXT_PUBLIC_BASE_URL}/category/${slug}`,
          },
        ]}
      />
      <Layout>
        <Container maxWidth="container.xl" py={20}>
          <Heading mb={3} as="h1" size="2xl">
            servicepong blog
          </Heading>
          <Text fontSize="2xl">
            Product announcements, changelogs and insides from the development
            team.
          </Text>
          <Flex flexWrap="wrap" my={10} gap={2}>
            <Link href="/blog" passHref>
              <Button as="a" variant="outline">
                All posts
              </Button>
            </Link>
            {blog.data?.allCategorys.edges?.map((category) => (
              <Link
                href={`/blog/category/${category?.node._meta.uid}`}
                key={category?.node._meta.id}
                passHref
              >
                <Button
                  variant={
                    category?.node._meta.uid === slug ? undefined : 'outline'
                  }
                  as="a"
                >
                  {category?.node.title}
                </Button>
              </Link>
            ))}
          </Flex>
          {blog.data?.allBlog_entrys.edges &&
          blog.data.allBlog_entrys.edges.length > 0 ? (
            <Grid templateColumns="repeat(12, 1fr)" gap={5}>
              {blog.data.allBlog_entrys.edges.map((blogEntry) => (
                <GridItem
                  colSpan={{ base: 12, md: 6, lg: 4 }}
                  key={blogEntry?.node._meta.id}
                >
                  <BlogCard
                    title={blogEntry?.node.title}
                    slug={blogEntry?.node._meta.uid}
                    category={blogEntry?.node.category as Category}
                    excerpt={blogEntry?.node.excerpt}
                    released={blogEntry?.node._meta.firstPublicationDate}
                  />
                </GridItem>
              ))}
            </Grid>
          ) : (
            <EmptyMessage msg="Nothing here so far" />
          )}
        </Container>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const apolloClient = initializeApollo();

  const category: CategoryQueryResult = await apolloClient.query({
    query: CategoryDocument,
    variables: {
      slug: query.slug,
    },
  });

  if (!category.data?.allCategorys.edges) {
    return {
      notFound: true,
    };
  }

  const blog: BlogQueryResult = await apolloClient.query({
    query: BlogDocument,
    variables: {
      categoryId:
        category?.data?.allCategorys?.edges &&
        category?.data?.allCategorys?.edges[0] &&
        category?.data?.allCategorys?.edges[0].node._meta.id,
    },
  });

  return addApolloState(apolloClient, {
    props: {
      blog,
      slug: query.slug,
    },
  });
};

export default BlogCategoryPage;
