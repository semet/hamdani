import Link from "next/link";
import { FC } from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons: FC = () => {
   const sendMail = () => {
      if (typeof window !== "undefined") {
         (window as any).location = "mailto:hamdanilombok@gmail.com";
      }
   };
   return (
      <div className="flex gap-2 text-gray-500 dark:text-slate-400 text-2xl">
         <Link href="" className="hover:text-gray-900 dark:hover:text-slate-50">
            <FaGithub />
         </Link>
         <Link
            href="https://www.facebook.com/hamdaniashsidik"
            target="_blank"
            className="hover:text-blue-800 dark:hover:text-slate-50"
         >
            <FaFacebook />
         </Link>
         <Link
            href="https://twitter.com/HamdaniAshSidik"
            target="_blank"
            className="hover:text-gray-800 dark:hover:text-slate-50"
         >
            <FaXTwitter />
         </Link>
         <Link
            href="https://www.linkedin.com/in/hamdani-ash-sidiq-92b697115"
            target="_blank"
            className="hover:text-blue-900 dark:hover:text-slate-50"
         >
            <FaLinkedin />
         </Link>
         <button
            onClick={sendMail}
            className="hover:text-red-500 dark:hover:text-slate-50"
         >
            <FaEnvelope />
         </button>
      </div>
   );
};

export default SocialIcons;
