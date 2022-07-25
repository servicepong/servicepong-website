import { FC, ReactNode } from 'react';
import { Flex, GridItem, Heading } from '@chakra-ui/react';

interface BenefitItemProps {
  icon: ReactNode;
  coming?: boolean;
  title: string;
  text: ReactNode;
}

const BenefitItem: FC<BenefitItemProps> = ({ icon, coming, title, text }) => {
  return (
    <GridItem colSpan={{ base: 12, sm: 6, lg: 4 }}>
      <Flex
        borderRadius="full"
        backgroundColor="orange.300"
        mb={7}
        height={50}
        width={50}
        alignItems="center"
        justifyContent="center"
      >
        {icon}
      </Flex>
      <Heading size="md" as="h3" mb={4}>
        {title} {coming && '(Coming soon)'}
      </Heading>
      {text}
    </GridItem>
  );
};

export { BenefitItem };
