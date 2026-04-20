export default function VictimInterface() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden bg-white dark:bg-black font-mono text-black dark:text-white">
      <div className="w-full lg:w-1/2 flex flex-col gap-8 p-8 md:p-16 lg:overflow-y-auto">
        <header>
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
            Office of the Generative Witness — Treatment T-002
          </p>
          <h1 className="text-2xl font-normal">Victim Interface</h1>
        </header>

        <section className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            The Victim Interface is a treatment for the generation of lyric reflection
            to shame response. The treatment proceeds in four cycles, each probing
            a members relationship to power, oppression and self-implication.
          </p>
          <p>
            What is submitted is not returned. What is returned is not what was
            submitted. The Lions guide.
          </p>
        </section>

        <div className="border border-zinc-200 dark:border-zinc-800 p-6">
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
            Access Treatment
          </p>
          <a
            href="https://victim-interface.office-of-the-generative-witness.site"
            className="text-sm hover:underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            victim-interface.office-of-the-generative-witness.site →
          </a>
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
          src="/pdf/victim-interface.pdf#navpanes=0"
          className="w-full border border-zinc-200 dark:border-zinc-800 h-[60vh] lg:h-auto lg:flex-1"
        />
      </div>
    </div>
  );
}
