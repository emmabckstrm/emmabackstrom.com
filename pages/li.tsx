import { Head } from "../components";
import { LinkedInQRCode } from "../components/LinkedInQRCode";

const Index = () => {
  const gradient =
    "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-300 to-rose-300";

  return (
    <>
      <Head />
      <div
        className={`text-center w-full h-full flex flex-col items-center justify-center ${gradient}`}
      >
        <div className="text-black w-10/12 sm:max-w-xs md:max-w-md space-y-2">
          <div className="rounded-3xl overflow-hidden inline-block">
            <LinkedInQRCode />
          </div>
          <p className="md:text-xl font-mono">
            <a
              className="underline text-purple-600 font-bold hover:tracking-widest transition-all"
              href="https://www.linkedin.com/in/emmabackstrom"
            >
              emmabackstrom @ linkedin
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
