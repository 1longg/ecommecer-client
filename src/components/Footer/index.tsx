import Image from "next/image";
import { LogoVercel } from "../Icon/logoVercel";
import Link from "next/link";
import { LinkedIcon } from "../Icon/LinkedIcon";

export default function Footer() {
  return (
    <div className="bg-primaryColor px-16  w-full ">
      <div className="container flex justify-between border-t-2 py-12 ">
        <div className="flex">
          <div className="mr-8 flex">
            <LogoVercel fill="#000000" className="mr-2" />
            <p>ACME STORE</p>
          </div>
          <div className="flex flex-col text-slate-400">
            <Link
              href="/"
              className="group mb-4 hover:underline hover:underline-offset-4 hover:text-black"
            >
              Home
            </Link>
            <Link
              href="/"
              className="group mb-4 hover:underline hover:underline-offset-4  hover:text-black"
            >
              About
            </Link>
            <Link
              href="/"
              className="group mb-4 hover:underline hover:underline-offset-4  hover:text-black"
            >
              Shippings & Return Policy
            </Link>
            <Link
              href="/"
              className="group mb-4 hover:underline hover:underline-offset-4  hover:text-black"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/"
              className="group mb-4 hover:underline hover:underline-offset-4  hover:text-black"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="mr-8">
          <p  className="mb-4">Contact Me</p>
          <Link href='https://www.linkedin.com/in/1longg/' className="flex">
            <LinkedIcon fill="currentColor" />
            <p className="ml-2">1longg</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
