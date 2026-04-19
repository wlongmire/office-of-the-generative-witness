export default function Disassociations() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-mono text-black dark:text-white p-8 md:p-16">
      <header className="mb-12">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
          Office of the Generative Witness — Treatment T-003
        </p>
        <h1 className="text-2xl font-normal">Disassociations</h1>
      </header>

      <section className="max-w-lg mb-12 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          Disassociations is a treatment for the extrapolation of meaning
          through part-whole relational selection. The subject chooses a part.
          The Office names the whole. What follows is a sequence.
        </p>
        <p>
          This treatment is under active development. The procedure has not yet
          been issued.
        </p>
      </section>

      <div className="border border-zinc-200 dark:border-zinc-800 p-6 max-w-sm">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
          Treatment Status
        </p>
        <p className="text-sm text-zinc-400">
          Pending issuance. Check back for updates.
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
