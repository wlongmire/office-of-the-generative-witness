import Image from "next/image";

export default function Disassociations() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden bg-white dark:bg-black font-mono text-black dark:text-white">
      <div className="w-full lg:w-1/2 flex flex-col gap-8 p-8 md:p-16 lg:overflow-y-auto">
        <header className="flex items-center gap-4">
          <Image src="/treatment-icons/disassosations.png" alt="Disassociations" width={48} height={48} className="shrink-0" />
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
              Office of the Generative Witness — Treatment T-003
            </p>
            <h1 className="text-2xl font-normal">Disassociations</h1>
          </div>
        </header>

        <section className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            Disassociations is a treatment and ritual for members
            exploring seperation from OGW for themselves or others
            Through the abstract selection of part-whole relations
            within our seperation charter, a member and the OGW
            can resolve any feelings of discontent, itself data
            useful towards the building of the ideal model.
          </p>
          <p>
            This treatment is under active development. The procedure has not yet
            been issued. All requests for disassociation can be sent to <a href="mailto:info@office-of-the-generative-witness.site" className="text-sm hover:underline underline-offset-4">
            info@office-of-the-generative-witness.site</a>.
          </p>
        </section>

        <div className="border border-zinc-200 dark:border-zinc-800 p-6">
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
            Treatment Status
          </p>
          <p className="text-sm text-zinc-400">
            Pending issuance. Check back for updates.
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
          src="/pdf/disassosations.pdf#navpanes=0"
          className="w-full border border-zinc-200 dark:border-zinc-800 h-[60vh] lg:h-auto lg:flex-1"
          style={{ WebkitOverflowScrolling: "touch", overflowY: "scroll" }}
        />
      </div>
    </div>
  );
}
