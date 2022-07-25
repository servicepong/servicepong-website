import { FC } from 'react';
import Image from 'next/image';
import { Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Integration } from 'apollo/generated/types';

interface IntegrationCardProps {
  integration: Integration;
}

export const IntegrationCard: FC<IntegrationCardProps> = ({ integration }) => {
  return (
    <Box
      borderRadius={'xl'}
      backgroundColor={'blackAlpha.300'}
      p={4}
      height={'100%'}
    >
      {integration.coming_soon && (
        <Flex justifyContent={'flex-end'}>
          <Badge>Coming soon</Badge>
        </Flex>
      )}
      {integration.logo && integration.logo.url !== '' && (
        <Image
          width={48}
          height={48}
          src={integration.logo.url}
          alt={`${integration.name} Logo`}
        />
      )}
      <Heading as={'h3'} size={'md'} mt={4}>
        {integration.name}
      </Heading>
      <Text>{integration.category}</Text>
    </Box>
  );
};
