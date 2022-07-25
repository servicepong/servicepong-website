import { AiOutlineTwitter } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import { NextPage } from 'next';
import Image from 'next/image';
import NextLink from 'next/link';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Link,
  ListItem,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { Layout } from '@layouts/*';

import { route } from '@helper/routes';

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="About"
        description="Learn more about servicepong's tech stack and the team behind it."
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
            name: 'About',
            item: `${process.env.NEXT_PUBLIC_BASE_URL}${route.about()}`,
          },
        ]}
      />
      <Layout>
        <Box backgroundColor="green.300">
          <Container maxWidth="container.xl" py={20}>
            <VStack spacing={2} textAlign="left" alignItems="flex-start">
              <Heading as="h1" size="xl" color="black">
                About
              </Heading>
              <Text fontSize="2xl" color="black">
                servicepong is part of{' '}
                <strong>
                  <NextLink href="https://project-tampah.com" passHref>
                    <Link color="black" target="_blank">
                      Project Tampah
                    </Link>
                  </NextLink>
                </strong>
              </Text>
            </VStack>
          </Container>
        </Box>

        <Container pt={20} maxWidth="container.xl">
          <Heading as="h2" size="lg" mb={3}>
            About the project
          </Heading>
          <Text fontSize="lg" mb={3}>
            <Text as="span" color="green.200">
              servicepong.io
            </Text>{' '}
            was created out of our own needs. For private projects as well as
            for customers, a system was needed to monitor various services as
            easily as possible. Thereby the operation, the setup and the
            alerting were in the foreground.
          </Text>
          <Text fontSize="lg" mb={3}>
            Since monitoring services is the most important thing in any
            business, we decided to develop a project divided into two stages:
            among them the API, which is the heart of it all, and the app, which
            allows easy and user-friendly operation of the API. However, it is
            also possible to use the API through the Django Admin.
          </Text>
          <Text fontSize="lg" mb={3}>
            We don&apos;t want to tell anyone which monitoring tool you should
            use, but we want to give everyone the opportunity to look behind the
            scenes with us. That&apos;s why{' '}
            <Text as="span" color="green.200">
              servicepong.io
            </Text>{' '}
            is open source on{' '}
            <NextLink href={route.github()} passHref>
              <Link color="green.300" target="_blank">
                Github
              </Link>
            </NextLink>
            . This way, everyone can see our project for themselves, and through
            that, our work. By doing so, we enable anyone to install the API,
            optionally with the app, for themselves.
          </Text>
          <Text fontSize="lg" mb={3}>
            Additionally it is possible for everyone to develop own features
            (e.g. new integrations) and thus be a part of servicepong and the
            development.
          </Text>

          <Grid mt={7} gap={4} templateColumns="repeat(3, 1fr)">
            <GridItem>
              <Heading as="h3" size="md" mb={3}>
                Techstack
              </Heading>
              <UnorderedList spacing={3}>
                <ListItem>
                  <Text as="span" color="green.200">
                    Django
                  </Text>{' '}
                  API
                </ListItem>
                <ListItem>
                  <Text as="span" color="green.200">
                    Next.js
                  </Text>{' '}
                  Website and App
                </ListItem>
                <ListItem>
                  <Text as="span" color="green.200">
                    Chakra UI
                  </Text>{' '}
                  React framework
                </ListItem>
                <ListItem>
                  <Text as="span" color="green.200">
                    Docusaurs
                  </Text>{' '}
                  Documentation
                </ListItem>
              </UnorderedList>
            </GridItem>

            <GridItem>
              <Heading as="h3" size="md" mb={3}>
                Hardware
              </Heading>
              <UnorderedList spacing={3}>
                <ListItem>
                  <Text as="span" color="green.200">
                    AWS
                  </Text>{' '}
                  Storage and CDN
                </ListItem>
                <ListItem>
                  <Text as="span" color="green.200">
                    Cloudflare
                  </Text>{' '}
                  CDN, Protection and Docs Hosting
                </ListItem>
                <ListItem>
                  <Text as="span" color="green.200">
                    Digital Ocean
                  </Text>{' '}
                  Server hosting
                </ListItem>
                <ListItem>
                  <Text as="span" color="green.200">
                    Hetzner
                  </Text>{' '}
                  Server hosting
                </ListItem>
              </UnorderedList>
            </GridItem>

            <GridItem>
              <Heading as="h3" size="md" mb={3}>
                Useful links
              </Heading>
              <UnorderedList spacing={3}>
                <ListItem>
                  <NextLink href={route.github()} passHref>
                    <Link color="green.300" target="_blank">
                      Github
                    </Link>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink href="https://twitter.com/servicepong" passHref>
                    <Link color="green.300" target="_blank">
                      Twitter
                    </Link>
                  </NextLink>
                </ListItem>
              </UnorderedList>
            </GridItem>
          </Grid>
        </Container>

        <Container pt={20} maxWidth="container.xl">
          <Heading as="h2" size="lg" mb={3}>
            Project insights
          </Heading>
          <Text fontSize="lg"></Text>
          <Table mt={8}>
            <Thead>
              <Tr>
                <Th>Description</Th>
                <Th>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Online since</Td>
                <Td>2022/07</Td>
              </Tr>
              <Tr>
                <Td>Accounts</Td>
                <Td>21</Td>
              </Tr>
              <Tr>
                <Td>Payed accounts</Td>
                <Td>6</Td>
              </Tr>
              <Tr>
                <Td>Pings per day</Td>
                <Td>260</Td>
              </Tr>
              <Tr>
                <Td>Pongs in total</Td>
                <Td>3900</Td>
              </Tr>
            </Tbody>
            <TableCaption>Last updated 07/2022</TableCaption>
          </Table>
        </Container>

        <Container py={20} maxWidth="container.xl">
          <Heading as="h2" size="lg" mb={3}>
            About the team
          </Heading>
          <Text mb={8} fontSize="lg">
            The servicepong team consists of two freelance developers: Kenny and
            Tobias.
            <br />
            Kenny and Tobias work with <strong>Project Tampah</strong> for
            several clients, mainly from Germany, and work on their own
            projects. Among them are{' '}
            <Text as="span" color="green.200">
              servicepong.io
            </Text>
            ,{' '}
            <Text as="span" color="green.200">
              gameservercheck.com
            </Text>
            ,{' '}
            <Text as="span" color="green.200">
              happysuits.de
            </Text>
            ,{' '}
            <Text as="span" color="green.200">
              tell-it.eu
            </Text>{' '}
            and others.
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <GridItem>
              <Image
                alt="via unsplash.com"
                src="/1.jpg"
                layout="responsive"
                width="620"
                height="930"
              />
              <Heading mt={4} size="md" as="h4">
                Kenny Wagenknecht
              </Heading>
              <Text>Frontend Developer</Text>
              <Flex gap={4} mt={4} alignItems="center">
                <NextLink href="https://github.com/kennyzehn" passHref>
                  <Link target="_blank">
                    <Icon w={8} h={8} as={DiGithubBadge} />
                  </Link>
                </NextLink>
                <NextLink href="https://twitter.com/kennyzehn" passHref>
                  <Link target="_blank">
                    <Icon w={8} h={8} as={AiOutlineTwitter} />
                  </Link>
                </NextLink>
              </Flex>
            </GridItem>

            <GridItem>
              <Image
                alt="via unsplash.com"
                src="/2.jpg"
                layout="responsive"
                width="620"
                height="930"
              />
              <Heading mt={4} size="md" as="h4">
                Tobias Lindenberg
              </Heading>
              <Text>Backend Developer</Text>
              <Flex gap={4} mt={4} alignItems="center">
                <NextLink href="https://github.com/bloomcake" passHref>
                  <Link target="_blank">
                    <Icon w={8} h={8} as={DiGithubBadge} />
                  </Link>
                </NextLink>
                <NextLink href="https://twitter.com/tolindenberg" passHref>
                  <Link target="_blank">
                    <Icon w={8} h={8} as={AiOutlineTwitter} />
                  </Link>
                </NextLink>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default AboutPage;
