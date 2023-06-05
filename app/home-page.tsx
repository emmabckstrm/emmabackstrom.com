"use client";

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage() {
  const gradient =
    "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-300 to-rose-300";

  return (
    <>
      <div
        className={`text-center w-full h-full flex flex-col items-center justify-center ${gradient}`}
      >
        <div className="text-black w-10/12 sm:max-w-xs md:max-w-md space-y-2">
          <h1 className="font-bold text-3xl md:text-6xl italic capitalize">
            hey there!
          </h1>
          <p className="text-lg md:text-2xl font-mono">
            I'm Emma, a Fullstack Engineer based in Stockholm.
          </p>
          <p className="md:text-xl font-mono">
            <a
              className="underline text-purple-600 font-bold hover:tracking-widest transition-all"
              href="https://www.linkedin.com/in/emmabackstrom"
            >
              Contact me on LinkedIn
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
