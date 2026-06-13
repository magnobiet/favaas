import { CopyCodeSnippetButton } from '../components/CopyCodeSnippetButton';
import { Header } from '../components/Header';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="honeycomb-field pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-50 mask-[linear-gradient(to_left,black,transparent)]" />
      <Header />

      <main className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20 lg:pt-32">
        <section>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-foreground">
            <span aria-hidden="true">⬡</span> Favicon as a Service
          </div>
          <h1 className="font-display max-w-2xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-7xl">
            Um favicon doce e simples.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Transforme qualquer emoji em favicon. Troque a abelhinha pelo seu
            favorito, cole no HTML e pronto.
          </p>
        </section>

        <section aria-labelledby="title" className="relative">
          <div className="absolute -left-5 -top-14 hidden size-16 rotate-12 items-center justify-center rounded-2xl bg-primary text-3xl shadow-lg sm:flex">
            🐝
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_70px_color-mix(in_oklch,var(--color-foreground)_12%,transparent)]">
            <div className="flex items-center justify-between border-b border-border bg-muted px-5 py-4">
              <div>
                <p
                  id="title"
                  className="font-display font-semibold text-card-foreground"
                >
                  É só uma linha
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Cole dentro da tag &lt;head&gt;
                </p>
              </div>
              <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">
                HTML
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <pre className="overflow-x-auto rounded-xl bg-foreground p-5 text-sm leading-7 text-background">
                <code>
                  <span className="text-primary">&lt;link</span> rel=
                  <span className="text-accent">&quot;icon&quot;</span>
                  {'\n  '}href=
                  <span className="text-accent">
                    &quot;https://favicon.magnobiet.com/e/🐝&quot;
                  </span>{' '}
                  <span className="text-primary">/&gt;</span>
                </code>
              </pre>

              <CopyCodeSnippetButton />
            </div>
          </div>

          <p className="mt-5 text-center text-sm text-muted-foreground">
            Substitua 🐝 por qualquer emoji que quiser.
          </p>
        </section>
      </main>
    </div>
  );
}
