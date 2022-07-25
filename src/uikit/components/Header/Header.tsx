import { FC } from 'react';
import NextLink from 'next/link';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

import { route } from '@helper/routes';
import Logo from '@icons/logo.svg';
import LogoMinimal from '@icons/logo-minimal.svg';

export const Header: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box py={8} background={'blackAlpha.300'}>
        <Container maxW={'container.xl'}>
          <Grid templateColumns="repeat(12, 1fr)" alignItems={'center'}>
            <GridItem
              colSpan={{ base: 4, md: 0 }}
              display={{ base: 'block', md: 'none' }}
            >
              <IconButton
                onClick={onOpen}
                aria-label="Open menu"
                icon={<HamburgerIcon />}
              />
            </GridItem>
            <GridItem colSpan={{ base: 4, md: 2 }}>
              <Box display={{ base: 'none', lg: 'block' }}>
                <NextLink href={route.home()} passHref>
                  <a>
                    <Logo />
                  </a>
                </NextLink>
              </Box>
              <Box
                display={{ base: 'block', lg: 'none' }}
                maxWidth={'50px'}
                margin={'0 auto'}
              >
                <NextLink href={route.home()} passHref>
                  <a>
                    <LogoMinimal />
                  </a>
                </NextLink>
              </Box>
            </GridItem>
            <GridItem colSpan={8} display={{ base: 'none', md: 'block' }}>
              <Center>
                <Flex as={'nav'} gap={8}>
                  <NextLink href={route.home()} passHref>
                    <Link>Home</Link>
                  </NextLink>
                  <NextLink href={route.pricing()} passHref>
                    <Link>Pricing</Link>
                  </NextLink>
                  <NextLink href={route.integrations()} passHref>
                    <Link>Integrations</Link>
                  </NextLink>
                  <NextLink href={route.docs()} passHref>
                    <Link>Docs</Link>
                  </NextLink>
                  <NextLink href={route.about()} passHref>
                    <Link>About</Link>
                  </NextLink>
                  <NextLink href={route.blog()} passHref>
                    <Link>Blog</Link>
                  </NextLink>
                </Flex>
              </Center>
            </GridItem>
            <GridItem colSpan={{ base: 4, md: 2 }}>
              <Stack justifyContent={'flex-end'} direction={'row'}>
                <NextLink href={route.login()} passHref>
                  <Button
                    variant={'ghost'}
                    colorScheme={'green'}
                    as={'a'}
                    display={{ base: 'none', md: 'inline-flex' }}
                  >
                    Sign in
                  </Button>
                </NextLink>
                <NextLink href={route.register()} passHref>
                  <Button variant={'solid'} colorScheme={'green'} as={'a'}>
                    Sign up
                  </Button>
                </NextLink>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={4}>
            <Flex as={'nav'} flexDirection={'column'} gap={4}>
              <NextLink href={route.home()} passHref>
                <Link>Home</Link>
              </NextLink>
              <NextLink href={route.pricing()} passHref>
                <Link>Pricing</Link>
              </NextLink>
              <NextLink href={route.integrations()} passHref>
                <Link>Integrations</Link>
              </NextLink>
              <NextLink href={route.docs()} passHref>
                <Link>Docs</Link>
              </NextLink>
              <NextLink href={route.about()} passHref>
                <Link>About</Link>
              </NextLink>
              <NextLink href={route.blog()} passHref>
                <Link>Blog</Link>
              </NextLink>
              <div>
                <NextLink href={route.login()} passHref>
                  <Button as={'a'}>Sign in</Button>
                </NextLink>
              </div>
              <div>
                <NextLink href={route.register()} passHref>
                  <Button variant={'solid'} colorScheme={'green'} as={'a'}>
                    Sign up
                  </Button>
                </NextLink>
              </div>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
