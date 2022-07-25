import { FC } from 'react';
import Link from 'next/link';
import { Badge, Box, Button, Heading, Text } from '@chakra-ui/react';
import { Category } from 'apollo/generated/types';
import { RichText, RichTextBlock } from 'prismic-reactjs';

interface BlogCardProps {
  title?: string | null;
  slug?: string | null;
  category?: Category | null;
  excerpt?: RichTextBlock[] | null;
  released?: string;
}

export const BlogCard: FC<BlogCardProps> = ({
  title,
  slug,
  category,
  excerpt,
  released,
}) => {
  return (
    <Box as="article" display="block">
      <Link href={`/blog/${slug}`} passHref>
        <Box
          as="a"
          backgroundColor="whiteAlpha.200"
          p={5}
          borderRadius="lg"
          display="block"
        >
          <Badge>{category?.title}</Badge>
          {released && (
            <Text size="sm" mt={2}>
              {new Date(released).toDateString()}
            </Text>
          )}
          <Heading as="h2" size="xl" my={4}>
            {title}
          </Heading>
          {excerpt && <Box mb={5}>{RichText.render(excerpt)}</Box>}
          <Button>Read more</Button>
        </Box>
      </Link>
    </Box>
  );
};
