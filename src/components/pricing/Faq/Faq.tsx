import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react';
import { useAllFaqQuery } from 'apollo/generated/types';
import { RichText } from 'prismic-reactjs';

const Faq = () => {
  // apollo
  const { data: faq } = useAllFaqQuery({ variables: { name: 'Pricing' } });

  return (
    <>
      <Heading as="h1" mb={10} size="lg" textAlign="center">
        Frequently asked questions
      </Heading>
      <Accordion mt={5} mb={10}>
        {faq?.allFaqs?.edges &&
          faq.allFaqs?.edges[0] &&
          faq.allFaqs?.edges[0].node.items?.map((faqItem) => (
            <AccordionItem key={faqItem?.question}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <strong>{faqItem?.question}</strong>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {RichText.render(faqItem.answer)}
              </AccordionPanel>
            </AccordionItem>
          ))}
      </Accordion>
    </>
  );
};

export { Faq };
