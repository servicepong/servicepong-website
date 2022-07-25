export const route = {
  // landingpages
  home: () => '/',
  pricing: () => '/pricing',
  integrations: () => '/integrations',
  about: () => '/about',

  // blog
  blog: () => '/blog',
  blogCategory: (slug: string) => `/blog/category/${slug}`,
  blogDetail: (slug: string) => `/blog/${slug}`,

  docs: () => `${process.env.NEXT_PUBLIC_DOCS_URL}`,
  github: () => 'https://github.com/servicepong',

  // account
  register: () => `${process.env.NEXT_PUBLIC_APP_URL}/register`,
  login: () => `${process.env.NEXT_PUBLIC_APP_URL}/login`,
};
