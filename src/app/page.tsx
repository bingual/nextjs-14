'use server';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <div className={'p-8'}>
        <h1 className={'text-3xl font-bold text-black'}>Hello World</h1>
        <ul className={'mt-5'}>
          <li>
            <Link href="/shop/product/" className={'text-blue-700'}>
              상품 목록
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
