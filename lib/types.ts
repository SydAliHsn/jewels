export interface Product {
  id: number;
  storyName: string;
  name: string;
  slug: string;
  createdAt: string;
  price: number;
  salePrice?: number;
  featured?: boolean;
  bestseller?: boolean;
  description: string;
  category: string;
  subCategory: string;
  images: {
    url: 'string';
    alt?: string;
  }[];
}

export interface InstagramPost {
  url: string;
  alt?: string;
}

export interface Category {
  title: string;
  href: string;
  active?: boolean;
}
export interface SubCategory {
  title: string;
  href: string;
  active?: boolean;
}
