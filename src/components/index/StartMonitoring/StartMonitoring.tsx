import NextLink from 'next/link';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

import { route } from '@helper/routes';

const StartMonitoring = () => {
  return (
    <Box p={20} backgroundColor="blackAlpha.400">
      <Container maxWidth="container.xl">
        <Heading textAlign="center" size="xl" as="h3">
          Monitor your first service in less then a minute
        </Heading>
        <Text textAlign="center">
          Monitor your server, cron jobs, your backups and much more. The
          possibilities are endless. If the status changes, you will be alerted
          immediately.
        </Text>
        <Flex flexDirection="column" justifyContent="center">
          <Center>
            <NextLink href={route.pricing()} passHref>
              <Button
                colorScheme="green"
                size="lg"
                mt={7}
                flexBasis="auto"
                as="a"
              >
                Start monitoring
              </Button>
            </NextLink>
          </Center>
          <Text textAlign="center" fontSize="sm" mt={5}>
            Monitor 15 services for free. No credit card required.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export { StartMonitoring };
