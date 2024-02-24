import { mockhouses } from "@/mock";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const products = mockhouses;

const mainContainerClasses =
  "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen";

export default function Home() {
  return (
    <main
      className={`${poppins.className} ${mainContainerClasses} bg-red-100`}
    ></main>
  );
}
