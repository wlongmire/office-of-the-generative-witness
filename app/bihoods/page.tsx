export default function Bihoods() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden bg-white dark:bg-black font-mono text-black dark:text-white">
      <div className="w-full lg:w-1/2 flex flex-col gap-8 p-8 md:p-16 lg:overflow-y-auto">
        <header>
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
            Office of the Generative Witness — Treatment T-001
          </p>
          <h1 className="text-2xl font-normal">Bihoods</h1>
        </header>

        <section className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
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

        <div className="border border-zinc-200 dark:border-zinc-800 p-6">
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

        <div className="mt-auto text-xs text-zinc-400">
          <a href="/" className="hover:underline underline-offset-4">
            ← Return to Office
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-16">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4 shrink-0">
          Source Document
        </p>
        <iframe
          src="/pdf/bihoods.pdf#navpanes=0"
          className="w-full border border-zinc-200 dark:border-zinc-800 h-[60vh] lg:h-auto lg:flex-1"
        />
      </div>
    </div>
  );
}
