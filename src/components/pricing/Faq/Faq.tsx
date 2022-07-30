import { FAQPageJsonLd } from 'next-seo';
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
import { RichText, RichTextBlock } from 'prismic-reactjs';

const Faq = () => {
  // apollo
  const { data: faq } = useAllFaqQuery({ variables: { name: 'Pricing' } });

  const schemaFaqItems = () => {
    const faqItems: {
      questionName: string | null | undefined;
      acceptedAnswerText: RichTextBlock[];
    }[] = [];
    if (faq?.allFaqs.edges && faq.allFaqs.edges[0]) {
      faq.allFaqs.edges[0].node.items?.map((faqItem) => {
        faqItems.push({
          questionName: faqItem.question,
          acceptedAnswerText: faqItem.answer[0].text,
        });
      });
    }

    return faqItems;
  };

  return (
    <>
      <Heading as="h2" mb={10} size="lg" textAlign="center">
        Frequently asked questions
      </Heading>
      <FAQPageJsonLd mainEntity={schemaFaqItems()} />

      <Accordion mt={5} mb={10}>
        {faq?.allFaqs?.edges &&
          faq.allFaqs?.edges[0] &&
          faq.allFaqs?.edges[0].node.items?.map((faqItem) => (
            <AccordionItem key={faqItem?.question}>
              <h3>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <strong>{faqItem?.question}</strong>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
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
