import { getCurrentUser } from "@/actions/getCurrentUser";
import { Redressed } from "next/font/google";
import Link from "next/link";
import Container from "../Container";
import CartCount from "./CartCount";
// import Categories from "./Categories";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const Navbar = async () => {
  // const [nav, setNav] = useState(false);
  const currentUser = await getCurrentUser();
  // console.log("USername: ", currentUser);

  // const session = await getSession();
  // console.log("session: " + session);

  // const onChangeBack = () => {
  //   if (window.scrollY >= 60) {
  //     setNav(true);
  //   } else {
  //     setNav(false);
  //   }
  // };
  // window.addEventListener("scroll", onChangeBack);

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
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
            </div>
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      {/* <Categories /> */}
    </div>
  );
};

export default Navbar;
