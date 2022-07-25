import type { AppProps } from 'next/app';
import Head from 'next/head';
import PlausibleProvider from 'next-plausible';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { useApollo } from 'apollo/client';

const ServicePongWebsite = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps);

  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  };

  const theme = extendTheme({ config });

  return (
    <PlausibleProvider
      enabled={
        process.env.NEXT_PUBLIC_APP_ENV === 'production' ||
        process.env.NEXT_PUBLIC_APP_ENV === 'staging'
      }
      domain={
        process.env.NEXT_PUBLIC_APP_ENV === 'production'
          ? 'servicepong.io'
          : 'servicepong.xyz'
      }
      trackOutboundLinks
    >
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9ae6b4" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#111010" />
        <meta charSet="UTF-8" />
      </Head>

      <DefaultSeo
        defaultTitle="servicepong"
        titleTemplate="%s | servicepong"
        openGraph={{
          type: 'website',
          locale: 'en',
          url: process.env.NEXT_PUBLIC_BASE_URL,
          site_name: 'servicepong',
        }}
      />
      <SocialProfileJsonLd
        type="Organization"
        name="servicepong"
        url={process.env.NEXT_PUBLIC_BASE_URL || 'https://servicepong.io'}
        sameAs={[
          'https://www.facebook.com/servicepong',
          'https://twitter.com/servicepong',
        ]}
      />

      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </PlausibleProvider>
  );
};

export default ServicePongWebsite;
