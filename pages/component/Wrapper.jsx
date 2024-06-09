import Topbar from "./shared/Topbar";
import LeftSidebar from "./shared/LeftSidebar";
import RightSidebar from "./shared/RightSidebar";
import Bottombar from "./shared/Bottombar";
import { Inter } from "next/font/google";
import CommentForm from "./CommentForm";
const inter = Inter({ subsets: ["latin"] });

export default function Wrapper({ children }) {
  return (
    <div className={`${inter.className} bg-dark-1 h-full w-full`}>
      <Topbar />

      <main className="flex flex-row max-w-[1100px] mx-auto mt-10">
        <LeftSidebar />

        <section className="main-container">
          <div className="w-full max-w-4xl">
            <CommentForm />
            {children}
          </div>
        </section>

        <RightSidebar />
      </main>

      <Bottombar />
    </div>
  );
}
