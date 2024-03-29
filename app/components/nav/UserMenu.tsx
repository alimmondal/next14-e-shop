"use client";
import { SafeUser } from "@/type";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Avatar from "../Avatar";
import BackDrop from "./BackDrop";
import MenuItem from "./MenuItem";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const role = currentUser?.role;
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="
        p-2
        border-[1px]
        border-slate-400
        flex
        flex-row
        items-center
        gap-1
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition
        text-slate-700
        "
        >
          <Avatar src={currentUser?.image} />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div
            className="absolute
          rounded-md
          shadow-md
          w-[200px]
          bg-white
          overflow-hidden
          right-0
          top-12
          text-sm
          flex
          flex-col
          cursor-pointer
          "
          >
            {role === "ADMIN" ? (
              <div className="">
                <Link href={"/profile"}>
                  <MenuItem onClick={toggleOpen}>Your Profile</MenuItem>
                </Link>
                <Link href={"/orders"}>
                  <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                </Link>
                <Link href={"/admin"}>
                  <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                </Link>
                <hr />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
              </div>
            ) : role === "USER" ? (
              <div className="">
                <Link href={"/profile"}>
                  <MenuItem onClick={toggleOpen}>Your Profile</MenuItem>
                </Link>
                <Link href={"/orders"}>
                  <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                </Link>

                <hr />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Logout
                </MenuItem>
              </div>
            ) : (
              <div className="">
                <Link href={"/login"}>
                  <MenuItem onClick={toggleOpen}>Login</MenuItem>
                </Link>
                <Link href={"/register"}>
                  <MenuItem onClick={toggleOpen}>Register</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {isOpen ? <BackDrop onclick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
