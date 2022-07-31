import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';

import NotFoundIllustration from '@uikit/icons/404.svg';
import { Layout } from '@uikit/layouts';

const Custom404: NextPage = () => {
  return (
    <>
      <NextSeo title="You are lost…" />
      <Layout>
        <Box py={12}>
          <Container maxW="container.sm">
            <Box textAlign="center">
              <NotFoundIllustration />
              <Heading>You are lost…</Heading>
              <Text fontSize="2xl">
                Sorry, we are not sure what you are looing for.
              </Text>
              <Button as="a" href="/" mt={5}>
                Go to website
              </Button>
            </Box>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default Custom404;
