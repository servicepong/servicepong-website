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
import { BlogDocument, Category, useBlogQuery } from 'apollo/generated/types';

import { route } from '@helper/routes';
import { BlogCard, EmptyMessage } from '@uikit/components';

const BlogIndexPage: NextPage = () => {
  const { data: blog } = useBlogQuery();

  return (
    <>
      <NextSeo
        title="Blog"
        description="Product announcements, changelogs and insides from the development team."
      />
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
            <Button>All posts</Button>
            {blog?.allCategorys.edges?.map((category) => (
              <Link
                href={route.blogCategory(`${category?.node._meta.uid}`)}
                key={category?.node._meta.id}
                passHref
              >
                <Button variant="outline" as="a">
                  {category?.node.title}
                </Button>
              </Link>
            ))}
          </Flex>

          {blog?.allBlog_entrys.edges &&
          blog.allBlog_entrys.edges.length > 0 ? (
            <Grid templateColumns="repeat(12, 1fr)" gap={5}>
              {blog.allBlog_entrys.edges.map((blogEntry) => (
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

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: BlogDocument });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default BlogIndexPage;
