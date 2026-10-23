import clsx from 'clsx';
/*import Link from 'next/link';*/

type HeaderProps = {
  children: React.ReactNode;
};

export async function Header({ children }: HeaderProps) {
  return (
    <>
      <header>
        <h1
          className={clsx(
            'text-4xl/normal font-extrabold py-8',
            'sm:text-5xl/normal sm:font-extrabold sm:py-9 ',
            'md:text-6xl/normal md:font-extrabold md:py-10 ',
            'lg:text-7xl/normal lg:font-extrabold lg:py-11 ',
          )}
        >
          {/* <Link href='/'>*/}
          {children}
          {/*</Link>*/}
        </h1>
      </header>
    </>
  );
}
