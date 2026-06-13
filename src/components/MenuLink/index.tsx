'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentPropsWithoutRef } from 'react';

export function MenuLink({
  href,
  children,
  className,
  ...rest
}: Readonly<ComponentPropsWithoutRef<typeof Link>>) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        'rounded-lg px-3 py-2 transition-all duration-200 ease-smooth hover:bg-secondary hover:text-foreground',
        className,
        {
          'text-muted-foreground': pathname !== href,
          'text-foreground bg-secondary font-bold': pathname === href,
        },
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
