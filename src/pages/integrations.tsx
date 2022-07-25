import { FaBookOpen, FaLayerGroup } from 'react-icons/fa';
import { GetServerSideProps, NextPage } from 'next';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Layout } from '@layouts/*';
import { addApolloState, initializeApollo } from 'apollo/client';
import {
  AllIntegrationsDocument,
  Integration,
  useAllIntegrationsQuery,
} from 'apollo/generated/types';

import { IntegrationCard } from '@components/*';
import { route } from '@helper/routes';

const IntegrationsPage: NextPage = () => {
  const { data: integrations } = useAllIntegrationsQuery();

  return (
    <>
      <NextSeo
        title="Integration overview"
        description="servicepong supports more than 10 integrations and more are being added."
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
            name: 'Integrations',
            item: `${process.env.NEXT_PUBLIC_BASE_URL}${route.integrations()}`,
          },
        ]}
      />
      <Layout>
        <Container maxWidth="container.xl" py={20}>
          <VStack spacing={2} textAlign="center">
            <Heading as="h1" size="xl">
              Integrations
            </Heading>
            <Text fontSize="lg" color="gray.500">
              servicepong supports more than 10 integrations and more are being
              added
            </Text>
          </VStack>

          <Grid
            mt={10}
            templateColumns="repeat(12, 1fr)"
            gap={{ base: 2, md: 4, lg: 10 }}
            mb={5}
          >
            {integrations?.allIntegrations.edges?.map((item) => (
              <GridItem
                key={item?.node._meta.id || ''}
                colSpan={{ base: 6, md: 4, lg: 3 }}
              >
                <IntegrationCard integration={item?.node as Integration} />
              </GridItem>
            ))}
          </Grid>

          <VStack spacing={2} mt={24} textAlign="center">
            <Heading as="h2" size="lg">
              Contribute now
            </Heading>
            <Text fontSize="lg" color="gray.500">
              servicepong is open source. So you can participate in the
              development and implement your own integrations.
            </Text>
          </VStack>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            mt={12}
            gap={8}
          >
            <GridItem>
              <LinkBox
                p={8}
                borderRadius="lg"
                color="black"
                background="InfoBackground"
                textAlign="center"
                height="100%"
              >
                <VStack>
                  <Icon mb={6} height={12} width={12} as={FaBookOpen} />
                  <Heading as="h3" size="md">
                    Docs
                  </Heading>
                  <Text fontSize="lg">
                    In our documentation you will find everything about
                    servicepong.
                  </Text>
                  <LinkOverlay href={route.docs()} target="_blank">
                    <Button>Learn more</Button>
                  </LinkOverlay>
                </VStack>
              </LinkBox>
            </GridItem>

            <GridItem>
              <LinkBox
                textAlign="center"
                p={8}
                borderRadius="lg"
                color="black"
                background="Highlight"
                height="100%"
              >
                <VStack>
                  <Icon mb={6} height={12} width={12} as={FaLayerGroup} />
                  <Heading as="h3" size="md">
                    Open Source
                  </Heading>
                  <Text fontSize="lg">
                    Develop and implement your own integration.
                  </Text>
                  <LinkOverlay href={route.github()} target="_blank">
                    <Button>Start now</Button>
                  </LinkOverlay>
                </VStack>
              </LinkBox>
            </GridItem>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllIntegrationsDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default IntegrationsPage;
