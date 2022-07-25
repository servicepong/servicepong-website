import NextLink from 'next/link';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

const Enterprise = () => {
  return (
    <Box backgroundColor={'gray.700'} borderRadius={'lg'} p={5} my={14}>
      <Heading size={'md'} as={'h3'}>
        Enterprise
      </Heading>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        flexWrap={'wrap'}
        gap={3}
      >
        <Text>
          You have special requirements or you are a non-profit company. Get in
          touch with us!
        </Text>
        <NextLink href={'mailto:hello@servicepong.io'} passHref>
          <Button m={0} as="a">
            Contact us
          </Button>
        </NextLink>
      </Flex>
    </Box>
  );
};

export { Enterprise };
