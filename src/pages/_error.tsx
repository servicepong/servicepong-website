import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';

import NotFoundIllustration from '@uikit/icons/404.svg';
import { Layout } from '@uikit/layouts';

const Error: NextPage = () => {
  return (
    <>
      <NextSeo title="Something is wrong" />
      <Layout>
        <Box py={12}>
          <Container maxW="container.sm">
            <Box textAlign="center">
              <NotFoundIllustration />
              <Heading>Something is wrong…</Heading>
              <Text fontSize="2xl">
                Sorry, something went wrong, if the error persists please contact
                our <a href="mailto:help@servicepong.io">support</a>.
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

export default Error;
