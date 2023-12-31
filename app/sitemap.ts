import { getProducts } from '@/lib/helpers';
import { Product } from '@/lib/types';

export default async function sitemap() {
  const baseUrl = 'https://www.bejeweledbybt.com';
  const categories = ['women', 'men', 'kids'];

  const categoryUrls = categories.map(category => ({
    url: `${baseUrl}/shop/${category}`,
    lastModified: new Date(),
  }));

  const products = (await getProducts()) as Product[];
  const productUrls = products.map(({ slug }) => ({
    url: `${baseUrl}/product/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: baseUrl + '/contact',
      lastModified: new Date(),
    },
    {
      url: baseUrl + '/about',
      lastModified: new Date(),
    },
    {
      url: baseUrl + '/shop',
      lastModified: new Date(),
    },

    ...categoryUrls,
    ...productUrls,
  ];
}
