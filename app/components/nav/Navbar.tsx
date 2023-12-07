import { Redressed } from "next/font/google";
import Link from "next/link";
import Container from "../Container";
const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  return (
    <div
      className="
      sticky 
      top-0
      w-full
    bg-slate-50
      z-30
      shadow-sm
  "
    >
      <div
        className="py-4
    border-b-[1px]
    "
      >
        <Container>
          <div
            className="
            flex 
            items-center
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Link
              href="/"
              className={`${redressed.className} font-bold text-2xl`}
            >
              E-Shop
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="">CartCount</div>
            <div className="">UserMenu</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
