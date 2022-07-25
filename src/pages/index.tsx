import type { GetServerSideProps, NextPage } from 'next';
import { BreadcrumbJsonLd, LogoJsonLd, NextSeo } from 'next-seo';
import { addApolloState, initializeApollo } from 'apollo/client';
import { HomeIntegrationsDocument } from 'apollo/generated/types';
import { Header } from 'components/index';
import { Benefits } from 'components/index/Benefits';
import { Integrations } from 'components/index/Integrations';
import { StartMonitoring } from 'components/index/StartMonitoring/StartMonitoring';
import { TrustedTeams } from 'components/index/TrustedTeams';

import { Layout } from '@uikit/layouts/default/Default';

const IndexPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Simple Monitoring for everyone"
        description="servicepong allows you to easily monitor your servers and services. You don't need any special knowledge. Get started now and try it out for yourself."
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Homepage',
            item: `${process.env.NEXT_PUBLIC_BASE_URL}`,
          },
        ]}
      />
      <LogoJsonLd
        logo={`${process.env.NEXT_PUBLIC_CDN_URL}/logo.png`}
        url={`${process.env.NEXT_PUBLIC_BASE_URL}`}
      />
      <Layout>
        <Header />
        <TrustedTeams />
        <Benefits />
        <StartMonitoring />
        <Integrations />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: HomeIntegrationsDocument,
    variables: {
      first: 4,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default IndexPage;
