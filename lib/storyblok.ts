import StoryblokClient from 'storyblok-js-client';
import { NextResponse } from 'next/server';

import { InstagramPost, Product } from '@/lib/types';

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_SPACE_ACCESS_TOKEN,
});

// ////////////// //////////  Products  ///// //////
export async function getAllProducts() {
  let per_page = 100;

  const { total } = await Storyblok.get('cdn/stories', { per_page: 1, starts_with: 'products' });
  const totalRequests = Math.ceil(total / per_page);

  const requests = Array(totalRequests)
    .fill('')
    .map((_, i) => getStories({ page: i + 1, per_page, starts_with: 'products' }));

  const [productStories] = await Promise.all(requests);

  const products: Product[] = productStories.map((story: any) => {
    const { id, slug, name: storyName, created_at, content } = story;
    const { images, featured, bestseller, category, subCategory, description, price, sale_price, name } = content;

    return {
      id,
      slug: slug,
      storyName,
      name: name,
      createdAt: created_at,
      images: images.map((img: any) => ({ url: img.filename, alt: img.alt })),
      featured,
      bestseller,
      category,
      subCategory: subCategory.trim().toLowerCase(),
      description,
      price: Number(price),
      salePrice: Number(sale_price),
    };
  });

  return products;
}

const getStories = async ({ page, per_page, starts_with }: { page: number; per_page: number; starts_with: string }) => {
  const { data } = await Storyblok.get('cdn/stories', { per_page, page, starts_with });

  return data.stories;
};

// //////////// Instagram Posts /////////
export async function getAllInstagramPosts() {
  const postStories = await getStories({ starts_with: 'instagram-posts', per_page: 100, page: 1 });

  const instagramPosts: InstagramPost[] = postStories.map((story: any) => {
    const { image, alt } = story.content;

    return {
      url: image.filename,
      alt: alt,
    };
  });

  return instagramPosts;
}
