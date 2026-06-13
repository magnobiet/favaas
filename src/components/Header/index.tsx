import Link from 'next/link';
import { MenuLink } from '../MenuLink';

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
      <Link
        href="/"
        className="group flex items-center gap-3"
        aria-label="FAVaaS — início"
      >
        <span className="grid size-10 place-items-center rounded-xl bg-primary text-xl shadow-sm transition-all duration-300 ease-smooth group-hover:-rotate-6">
          🐝
        </span>

        <span className="font-display text-lg font-bold tracking-tight">
          FAVaaS
        </span>
      </Link>

      <nav
        aria-label="Navegação principal"
        className="flex items-center gap-1 text-sm font-medium"
      >
        <MenuLink href="/">Início</MenuLink>

        <MenuLink href="/sobre">Sobre</MenuLink>
      </nav>
    </header>
  );
}
