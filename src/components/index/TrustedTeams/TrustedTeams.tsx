import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
} from '@chakra-ui/react';

const TrustedTeams = () => {
  return (
    <Box backgroundColor="green.300" py={20}>
      <Container maxWidth="container.xl">
        <Heading textAlign="center" size="md" as="h3" color="black">
          Projects and companies from all over the world trust in the service of
          servicepong.io
        </Heading>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(12, 1fr)',
          }}
          justifyContent="center"
          gap={{ base: 5, md: 10 }}
          mt={10}
          alignItems="center"
        >
          <GridItem colSpan={{ base: 12, md: 6, lg: 2 }} textAlign="center">
            <Image
              style={{ width: 'auto', height: '30px', display: 'inline-block' }}
              src="/electronicx.svg"
              alt="Electronicx Logo"
            />
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6, lg: 2 }} textAlign="center">
            <Image
              style={{ width: 'auto', height: '30px', display: 'inline-block' }}
              src="/innovie.svg"
              alt="Innovie Logo"
            />
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6, lg: 2 }} textAlign="center">
            <Image
              style={{ width: 'auto', height: '30px', display: 'inline-block' }}
              src="/tell-it.svg"
              alt="tell it Logo"
            />
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6, lg: 2 }} textAlign="center">
            <Image
              style={{ width: 'auto', height: '30px', display: 'inline-block' }}
              src="/gameservercheck.svg"
              alt="Gameservercheck Logo"
            />
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6, lg: 2 }} textAlign="center">
            <Image
              style={{ width: 'auto', height: '30px', display: 'inline-block' }}
              src="/crowdmedia.svg"
              alt="Crowdmedia Logo"
            />
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 6, lg: 2 }} textAlign="center">
            <Image
              style={{ width: 'auto', height: '30px', display: 'inline-block' }}
              src="/happysuits.svg"
              alt="Happysuits Logo"
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export { TrustedTeams };
