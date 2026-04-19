export default function Bihoods() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-mono text-black dark:text-white p-8 md:p-16">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
          Office of the Generative Witness — Treatment T-001
        </p>
        <h1 className="text-2xl font-normal">Bihoods</h1>
      </header>

      <section className="max-w-lg mb-12 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          Bihoods is a treatment for the assignment of behavioral parameters to
          generated archetypes. Each subject is issued a bihood: a stable
          identity profile derived from normalized lyric input and rendered as
          institutional record.
        </p>
        <p>
          The treatment is ongoing. Subjects do not exit the procedure. They
          are archived.
        </p>
      </section>

      <div className="border border-zinc-200 dark:border-zinc-800 p-6 max-w-sm">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
          Access Treatment
        </p>
        <a
          href="https://bihoods.office-of-the-generative-witness.site"
          className="text-sm hover:underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          bihoods.office-of-the-generative-witness.site →
        </a>
        <p className="text-xs text-zinc-400 mt-3">
          Subdomain provisioning in progress. Link active upon domain
          configuration.
        </p>
      </div>

      <footer className="mt-16 text-xs text-zinc-400">
        <a href="/" className="hover:underline underline-offset-4">
          ← Return to Office
        </a>
      </footer>
    </div>
  );
}
