import { NextPage } from 'next';
import Link from 'next/link';
import NotFound from '@/components/NotFound';
import Preloader from '@/components/Preloader';

function isNumeric(str: string) {
  if (typeof str != 'string') return false; // we only process strings!
  return !isNaN(+str) && !isNaN(parseFloat(str)); // ...and ensure strings of whitespace fail
}

type Props = { params: { pageNumber: string } };

const ShopPage: NextPage<Props> = ({ params }) => {
  const { pageNumber } = params;

  if (!isNumeric(pageNumber)) return <NotFound />;

  return (
    <div className="container">
      <Preloader />

      <div className="h1">Your Own Jewellery Shop</div>
      {params.pageNumber}
    </div>
  );
};

export default ShopPage;
