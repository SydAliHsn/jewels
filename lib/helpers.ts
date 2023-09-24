import { Product, Category, SubCategory } from '@/lib/types';
import { getAllInstagramPosts, getAllProducts } from './storyblok';

// ////////////// /////// Fetch Products /////// ////////////// ////

export const getProducts = async (options?: {
  page?: number;
  category?: string;
  subCategory?: string;
  bestseller?: boolean;
  slug?: string;
  featured?: boolean;
}) => {
  let products = await getAllProducts();

  if (!options) return products;

  const productsPerPage = Number(process.env.PRODUCTS_PER_PAGE) || 25;

  if (options.slug) {
    return products.find(({ slug }) => slug === options.slug);
  }

  if (options.category && options.category !== 'all') {
    const category = options.category.toLowerCase();

    products = products.filter(prod => {
      // 1) Check if the category of the product is the same as the requested category.
      // 2) Or if the product's category if "unisex", then add it as well, if the requested category is "men" or "women"
      return prod.category === category || (prod.category === 'unisex' && unisexSubCategories.includes(category));
    });
  }

  if (options.subCategory) {
    const subCategory = options.subCategory.toLowerCase();

    products = products.filter(prod => prod.subCategory === subCategory);
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

// ////////////// /////// Fetch Instagram /////// ////////////// ////
export const getInstagramPosts = () => {
  return getAllInstagramPosts();
};

//////////////// /////////////// General //////////////// /////////////
const unisexSubCategories = ['men', 'women'];
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

export const getSubCategories = async (category: string, active?: string) => {
  const products = (await getProducts({ category })) as Product[];

  const subCategories = products.map(({ subCategory }) => ({
    title: subCategory,
    active: active?.toLowerCase().trim() === subCategory.toLowerCase().trim(),
    href: `/shop/${category}/${subCategory}`,
  }));

  return subCategories;
};
