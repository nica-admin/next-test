import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-gray-50 font-sans dark:bg-gray-950">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-gray-950 sm:items-start">
        <Image
          className="dark:invert h-auto w-30"
          src="/nica-text-blk.svg"
          alt="NICA Wordmark"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col rounded-lg bg-gray-900 backdrop-blur-sm items-center gap-6 text-center sm:items-start sm:text-left p-6">
          <h1 className="max-w-xs text-3xl leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <span className="rounded bg-black/6 px-1.5 py-0.5 font-black text-[0.9em] dark:bg-white/8">
              page.tsx
            </span>{" "}
            file. &nbsp;<span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-teal-600">
            <span className="relative font-black px-2 text-white dark:text-gray-950">Done!</span>
            </span>
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head on over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col rounded-lg bg-gray-900 backdrop-blur-sm items-center gap-6 text-center sm:items-start sm:text-left p-6">
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400"><span className="text-xs">Nov 9, 2026 - TonyP</span><br />Added Metric (headings) and Libre Franklin (body) fonts to project.</p>
          <p className="max-w-md text-lg leading-8 text-gray-800 dark:text-teal-600">Make sure to fetch changes from git!</p>
        </div>
        <div className="flex flex-col gap-4 text-base">
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">Useful Documentation:</p>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gray-200 px-5 text-background hover:text-gray-200 transition-colors hover:bg-gray-600 dark:hover:bg-gray-900 md:w-39.5"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            TailwindCSS
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-gray-900 md:w-39.5"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          </div>
        </div>
      </main>
    </div>
  );
}
