import { NextPage } from 'next';
import Link from 'next/link';
import { BiErrorCircle } from 'react-icons/bi'

import { getProducts, getCategories, getSubCategories } from '@/lib/helpers';
import FilterList from '@/components/FilterList';
import Preloader from '@/components/Preloader';
import ProductList from '@/components/ProductList';
import { Product } from '@/lib/types';

export const dynamicParams = false;
export const revalidate = 2 * 3600;

const categories = ['women', 'men', 'kids', 'all'];

export async function generateStaticParams() {
    const paramsArr: { category: string, subCategory: string }[] = [];

    await Promise.all(categories.map(async category => {
        const subCategories = await getSubCategories(category);

        subCategories.forEach(subCategory => {
            paramsArr.push({
                category,
                subCategory: subCategory.title,
            });
        });

    }));

    return paramsArr;
}

type Props = { params: { category: string, subCategory: string } };

const ShopCategory: NextPage<Props> = async ({ params }) => {
    const { category, subCategory } = params;

    const products = (await getProducts({ category })) as Product[];
    const subCategories = await getSubCategories(category, subCategory);

    return (
        <main
            className="shop">
            <Preloader />

            <div className="container">
                <h1>Latest Jewellery for {category[0].toUpperCase() + category.slice(1)}</h1>

                <FilterList categories={getCategories(category)} subCategories={subCategories} />

                {products.length ? <ProductList products={products} /> :
                    <div style={{ color: 'red', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.75rem' }}>
                        <p><BiErrorCircle style={{ scale: 1.3, marginRight: '3px' }} /> No Products found for {category}!</p>

                        <p style={{ color: 'var(--primary)' }}>Check out <Link style={{ display: 'inline', color: 'var(--primary)', textDecoration: 'underline' }} href='/shop'>All Products</Link>.</p> </div>}
            </div>
        </main>
    );
};

export default ShopCategory;
