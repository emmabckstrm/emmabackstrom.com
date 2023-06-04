import { Head } from "../components";

const Index = () => (
  <>
    <Head />
    <div className="text-center bg-gradient-to-b from-cyan-600 to-violet-600 w-full h-full flex flex-col items-center justify-center">
      <div className="text-white w-10/12 sm:max-w-xs md:max-w-md space-y-2">
        <h1 className="font-bold text-3xl md:text-6xl italic capitalize">
          emma bäckström
        </h1>
        <hr className="opacity-50"></hr>
        <p className="text-lg md:text-2xl font-mono">
          Hello! I'm Emma and I am a Fullstack Engineer based in Stockholm.
        </p>
        <p className="md:text-xl font-mono">
          <a
            className="underline text-orange-300 font-bold hover:tracking-widest transition-all"
            href="https://www.linkedin.com/in/emmabackstrom"
          >
            Contact me on LinkedIn
          </a>
        </p>
      </div>
    </div>
  </>
);

export default Index;
