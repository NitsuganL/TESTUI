import Link from "next/link";
import { FcAbout,FcContacts,FcHome,FcButtingIn } from "react-icons/fc";

export default function Navbar(){
    return(
        <>
       <ul className="menu menu-horizontal bg-base-100 rounded-box">
      <li>
        <Link href="/about"><FcAbout />About Us</Link>
      </li>
      <li>
        <Link href="/contactus"><FcContacts/>Contact Us</Link>
      </li>
      <li>
        <Link href="/home"><FcHome/>Home</Link>
      </li>
      <li>
        <Link href="/login"><FcButtingIn/>Log In</Link>
      </li>
    </ul>
        </>
    )
}