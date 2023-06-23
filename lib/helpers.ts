import { Product, Category } from '@/lib/types';

const unisexSubCategories = ['men', 'women'];

export const getProducts = async (options?: {
  page?: number;
  category?: string;
  bestseller?: boolean;
  featured?: boolean;
}) => {
  // It will revalidate data after every 30 minutes
  const baseUrl = process.env.ENVIRONMENT === 'production' ? process.env.VERCEL_URL : process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/products`, { next: { revalidate: 60 * 30 } });
  const data = await res.json();

  let products: Product[] = data.products;

  if (!options) return products;

  const productsPerPage = Number(process.env.PRODUCTS_PER_PAGE) || 25;

  if (options.category) {
    const category = options.category.toLowerCase();

    products = products.filter(prod => {
      // Check if the category of the product is the same as the requested category.
      // Or if the product's category if "unisex", then add it as well, if the requested category is "men" or "women"
      return prod.category === category || (prod.category === 'unisex' && unisexSubCategories.includes(category));
    });
  }

  if (options.page) {
    const page = options.page - 1;
    products = products.slice(productsPerPage * page, productsPerPage * page + productsPerPage);
  }

  if (options.bestseller) {
    products = products.filter(prod => prod.bestseller);
  }

  if (options.featured) {
    products = products.filter(prod => prod.featured);
  }

  return products;
};

export const getCategories = (active: string): Category[] => {
  return [
    {
      title: 'All',
      href: '/shop',
      active: active === 'all',
    },
    {
      title: 'Women',
      href: '/shop/women',
      active: active === 'women',
    },
    {
      title: 'Men',
      href: '/shop/men',
      active: active === 'men',
    },
    {
      title: 'Kids',
      href: '/shop/kids',
      active: active === 'kids',
    },
  ];
};
