import StoryblokClient from 'storyblok-js-client';
import { NextResponse } from 'next/server';

import { Product } from '@/lib/types';

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_SPACE_ACCESS_TOKEN,
});

export async function GET() {
  let per_page = 100;

  const { total } = await Storyblok.get('cdn/stories', { per_page: 1, starts_with: 'products' });
  const totalRequests = Math.ceil(total / per_page);

  const requests = Array(totalRequests)
    .fill('')
    .map((_, i) => getProducts({ page: i + 1, per_page }));

  const [productStories] = await Promise.all(requests);

  const products: Product[] = productStories.map((story: any) => {
    const { id, slug, name: storyName, created_at, content } = story;
    const { images, featured, bestseller, category, description, price, sale_price, name } = content;

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
      description,
      price: Number(price),
      salePrice: Number(sale_price),
    };
  });

  return NextResponse.json({ products });
}

const getProducts = async ({ page, per_page }: { page: number; per_page: number }) => {
  const { data } = await Storyblok.get('cdn/stories', { per_page, page, starts_with: 'products' });

  return data.stories;
};
