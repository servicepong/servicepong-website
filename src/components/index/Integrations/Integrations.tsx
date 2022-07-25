import NextLink from 'next/link';
import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Integration, useHomeIntegrationsQuery } from 'apollo/generated/types';

import { IntegrationCard } from '@components/*';
import { route } from '@helper/routes';

const Integrations = () => {
  const { data: integrations } = useHomeIntegrationsQuery();

  return (
    <Container maxWidth="container.xl" mt={24}>
      <Heading textAlign="center" size="xl" as="h3">
        Integrations
      </Heading>
      <Text textAlign="center">
        More than 10 integrations so we can alert you anywhere
      </Text>
      <Grid
        mt="10"
        templateColumns="repeat(12, 1fr)"
        gap={{ base: 5, md: 10 }}
        mb={5}
      >
        {integrations?.allIntegrations.edges?.map((item) => (
          <GridItem
            key={item?.node._meta.id || ''}
            colSpan={{ base: 12, sm: 6, lg: 3 }}
          >
            <IntegrationCard integration={item?.node as Integration} />
          </GridItem>
        ))}
      </Grid>
      <Flex justifyContent="center" my={14}>
        <NextLink href={route.integrations()} passHref>
          <Button as="a">Show all integrations</Button>
        </NextLink>
      </Flex>
    </Container>
  );
};

export { Integrations };
