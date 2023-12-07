import Link from "next/link";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Container from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Phone</Link>
            <Link href="#">Laptop</Link>
            <Link href="#">Desktop</Link>
            <Link href="#">Watches</Link>
            <Link href="#">TVs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shopping Policy</Link>
            <Link href="#">Return & Exchanges</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              eligendi.
            </p>
            <p>&copy;{new Date().getFullYear()} E-Shop. All right reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex flex-row gap-3">
              <Link href="#">
                <MdFacebook size={32} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={32} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={32} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={32} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
