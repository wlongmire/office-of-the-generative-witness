import Link from "next/link";

const treatments = [
  {
    id: "T-001",
    slug: "bihoods",
    name: "Bihoods",
    description: "Archetype generation and behavioral parameter assignment.",
  },
  {
    id: "T-002",
    slug: "victim-interface",
    name: "Victim Interface",
    description: "Lyric input processing and normalized output rendering.",
  },
  {
    id: "T-003",
    slug: "disassociations",
    name: "Disassociations",
    description: "Part-whole relational extrapolation from structured sequence.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-mono text-black dark:text-white p-8 md:p-16">
      <header className="mb-16">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
          Office of the Generative Witness
        </p>
        <h1 className="text-2xl font-normal">Active Treatments</h1>
        <p className="text-xs text-zinc-400 mt-4 max-w-md">
          The following treatments are currently in issuance. Each treatment
          constitutes a normalized procedure for the processing of lyric input.
          Access is granted upon entry.
        </p>
      </header>

      <nav>
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-800 border-t border-b border-zinc-200 dark:border-zinc-800">
          {treatments.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/${t.slug}`}
                className="flex items-start justify-between gap-8 py-6 group"
              >
                <div className="flex gap-6 items-start">
                  <span className="text-xs text-zinc-400 pt-0.5 w-12 shrink-0">
                    {t.id}
                  </span>
                  <div>
                    <p className="text-sm group-hover:underline underline-offset-4">
                      {t.name}
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">{t.description}</p>
                  </div>
                </div>
                <span className="text-xs text-zinc-400 group-hover:text-black dark:group-hover:text-white shrink-0 pt-0.5">
                  Enter →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="mt-16 text-xs text-zinc-400">
        <p>All outputs are procedural. All inputs are subject to treatment.</p>
      </footer>
    </div>
  );
}
