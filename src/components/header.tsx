import Link from 'next/link';

export default function HeaderComponent() {
  return (
    <header className={'my-3'}>
      <section className={'container'}>
        <article className={'container flex items-center space-x-6 font-bold'}>
          <h1 className={'text-3xl text-blue-800'}>
            <Link href={'/'}>Adora</Link>
          </h1>
          <ul>
            <li className={'text-2xl'}>
              <Link href="/shop/product/" className={'text-blue-500'}>
                상품 목록
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </header>
  );
}
