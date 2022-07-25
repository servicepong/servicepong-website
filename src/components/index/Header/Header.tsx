import NextLink from 'next/link';
import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react';

import { route } from '@helper/routes';

import { CodeSnippets } from '../CodeSnippets';

const Header = () => {
  return (
    <Box backgroundColor="blackAlpha.300" py="24">
      <Container maxW="container.xl">
        <Stack>
          <Heading textAlign="center" as="h1" size="2xl">
            Simple{' '}
            <Text as="span" color="green.200">
              Monitoring
            </Text>{' '}
            for everyone.
          </Heading>

          <Text textAlign="center" fontSize="2xl">
            Servicepong allows you to easily monitor your servers and services.
            You don&apos;t need any special knowledge.
          </Text>
          <Text textAlign="center" fontSize="2xl" mt="0">
            Get started now and try it out for yourself.
          </Text>
        </Stack>
        <Stack direction="row" justifyContent="center" mt="8">
          <NextLink href={route.docs()} passHref>
            <Button variant="ghost" colorScheme="green" as="a" size="lg">
              Docs
            </Button>
          </NextLink>
          <NextLink href={route.pricing()} passHref>
            <Button variant="solid" colorScheme="green" as="a" size="lg">
              Get started
            </Button>
          </NextLink>
        </Stack>

        <CodeSnippets />
      </Container>
    </Box>
  );
};

export { Header };
