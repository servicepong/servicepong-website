import { GetServerSideProps, NextPage } from 'next';
import { BreadcrumbJsonLd, NextSeo } from 'next-seo';
import { Container } from '@chakra-ui/react';
import { Layout } from '@layouts/*';
import { addApolloState, initializeApollo } from 'apollo/client';
import { AllFaqDocument, AllProductsDocument } from 'apollo/generated/types';
import { Faq, Products } from 'components/pricing';

import { route } from '@helper/routes';

const PricingPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Pricing"
        description="servicepong has a fair plan model. Everyone can register for free and also use all the features."
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
            name: 'Pricing',
            item: `${process.env.NEXT_PUBLIC_BASE_URL}${route.pricing()}`,
          },
        ]}
      />
      <Layout>
        <Container maxWidth="container.xl" py={20}>
          <Products />
          <Faq />
        </Container>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllProductsDocument,
  });

  await apolloClient.query({
    query: AllFaqDocument,
    variables: {
      name: 'Pricing',
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default PricingPage;
