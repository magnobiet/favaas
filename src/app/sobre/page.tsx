import { ArrowLeftIcon } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { GithubRepoButton, Header, Button } from '~/components';

const pageTitle = 'FAVaaS — Sobre o FAVaaS';
const pageDescription =
  'O FAVaaS é uma brincadeira sobre favicons, não um serviço real.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="honeycomb-field pointer-events-none absolute inset-0 opacity-40 mask-[radial-gradient(circle_at_65%_45%,black,transparent_55%)]" />
      <Header />

      <main className="relative mx-auto flex w-full max-w-3xl flex-col items-start px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
        <div
          className="mb-8 grid size-16 place-items-center rounded-2xl bg-primary text-3xl shadow-lg"
          aria-hidden="true"
        >
          🍯
        </div>

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Sobre o projeto
        </p>

        <h1 className="font-display text-5xl font-bold leading-tight tracking-[-0.04em] sm:text-6xl">
          É só uma brincadeira.
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Apesar do nome pomposo, o Favaas não é um serviço real. É um
            experimento simples e divertido para mostrar como um emoji pode
            virar favicon em segundos.
          </p>

          <p>
            Não há conta, garantia, SLA ou colmeia de servidores. Use à vontade
            em projetos pessoais — e, para algo importante, hospede o seu
            próprio favicon.
          </p>
        </div>

        <section className="flex flex-col gap-4 justify-between w-full mt-10 md:flex-row">
          <Button variant="honey" size="xl" asChild>
            <Link href="/">
              <ArrowLeftIcon />
              Voltar e testar
            </Link>
          </Button>

          <GithubRepoButton />
        </section>
      </main>
    </div>
  );
}
