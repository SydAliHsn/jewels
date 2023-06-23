import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  if (req.nextUrl.searchParams.get('secret') !== 'alihassan') {
    return NextResponse.json({ revalidated: false, message: 'Invalid secret provided!' });
  }

  revalidatePath('/');
  revalidatePath('/shop');
  revalidatePath('/shop/[category]/');
  revalidatePath('/shop/[pageNumber]/');
  revalidatePath('/product/[slug]/');

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
