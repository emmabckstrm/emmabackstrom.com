import { Head } from "../components";
import { Sweeper } from "../features/sweeper/Sweeper";

const Page = () => (
  <>
    <Head />
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-300 to-rose-300">
      <Sweeper />
    </div>
  </>
);

export default Page;
