'use server';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <section className={'container'}>
        <h2 className={'text-2xl font-bold text-black'}>Hello World</h2>
      </section>
    </>
  );
}
