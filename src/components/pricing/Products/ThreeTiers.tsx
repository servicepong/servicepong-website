import { FC, ReactNode } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { AllProductsQuery } from 'apollo/generated/types';
import { RichTextBlock } from 'prismic-reactjs';

import { route } from '@helper/routes';

enum PaymentInterval {
  monthly,
  yearly,
}

interface ThreeTierPricingProps {
  products: AllProductsQuery;
  paymentInterval: PaymentInterval;
  onChangePaymentInterval: (interval: PaymentInterval) => void;
}

const ThreeTiers: FC<ThreeTierPricingProps> = ({
  products,
  paymentInterval,
  onChangePaymentInterval,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const priceLink = (product?: any) => {
    if (!product) {
      return route.register();
    }

    if (product.django_id_yearly) {
      return `${route.register()}?product=${
        paymentInterval === PaymentInterval.yearly
          ? product.django_id_yearly
          : product.django_id_monthly
      }`;
    }

    return route.register();
  };

  return (
    <Box>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" size="xl">
          Plans
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Start with a 14 day trial. You can cancel at any time.
        </Text>
      </VStack>

      <Box my={10}>
        <Heading size="md" my={4} textAlign="center">
          Payment interval
        </Heading>
        <Flex justifyContent="center" gap={4}>
          <Button
            variant={
              paymentInterval === PaymentInterval.yearly ? 'solid' : 'ghost'
            }
            colorScheme="green"
            onClick={() => onChangePaymentInterval(PaymentInterval.yearly)}
          >
            Yearly
          </Button>
          <Button
            variant={
              paymentInterval === PaymentInterval.monthly ? 'solid' : 'ghost'
            }
            colorScheme="green"
            onClick={() => onChangePaymentInterval(PaymentInterval.monthly)}
          >
            Monthly
          </Button>
        </Flex>
      </Box>

      <Grid
        templateColumns="repeat(12, 1fr)"
        textAlign="center"
        gap={{ base: 4, lg: 10 }}
        py={10}
      >
        {products.allProducts.edges?.map((product) => (
          <PriceWrapper key={product?.node.name || ''}>
            <Box py={4} px={12} position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: 'translate(-50%)' }}
              >
                {product?.node.popular && (
                  <Text
                    textTransform="uppercase"
                    bg="green.300"
                    px={3}
                    py={1}
                    color="black"
                    fontSize="sm"
                    fontWeight="600"
                    rounded="xl"
                  >
                    Most Popular
                  </Text>
                )}
              </Box>
              <Text fontWeight="500" fontSize="2xl">
                {product?.node.name}
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  €
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  {paymentInterval === PaymentInterval.yearly
                    ? product?.node.price_per_year
                    : product?.node.price_per_month}
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>

            <VStack bg="gray.700" py={4} borderBottomRadius="xl">
              <List spacing={3} textAlign="start" px={12}>
                {product?.node.benefits.map((benefit: RichTextBlock) => (
                  <ListItem key={benefit.text}>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {benefit.text}
                  </ListItem>
                ))}
              </List>
              <Box w="80%" pt={7}>
                <NextLink href={priceLink(product?.node)} passHref>
                  <Button
                    w="full"
                    colorScheme="green"
                    variant={product?.node.popular ? 'solid' : 'outline'}
                    as="a"
                  >
                    Start now
                  </Button>
                </NextLink>
              </Box>
            </VStack>
          </PriceWrapper>
        ))}
      </Grid>
    </Box>
  );
};

export { ThreeTiers };

interface PriceWrapperProps {
  children: ReactNode;
}

const PriceWrapper: FC<PriceWrapperProps> = ({ children }) => {
  return (
    <GridItem colSpan={{ base: 12, lg: 4 }}>
      <Box
        mb={4}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: 'center', lg: 'flex-start' }}
        borderColor={useColorModeValue('gray.200', 'gray.500')}
        borderRadius="xl"
      >
        {children}
      </Box>
    </GridItem>
  );
};
