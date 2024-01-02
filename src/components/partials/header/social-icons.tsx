import Link from "next/link";
import React, { FC } from "react";
import {
   FaEnvelope,
   FaEnvelopeOpenText,
   FaEnvelopeSquare,
   FaFacebook,
   FaGithub,
   FaLinkedin,
   FaRegEnvelope,
   FaTwitter,
   FaTwitterSquare,
} from "react-icons/fa";

const SocialIcons: FC = () => {
   return (
      <div className="flex gap-2 text-gray-500 text-2xl">
         <Link href="#" className="hover:text-gray-900">
            <FaGithub />
         </Link>
         <Link href="#" className="hover:text-blue-800">
            <FaFacebook />
         </Link>
         <Link href="#" className="hover:text-blue-500">
            <FaTwitterSquare />
         </Link>
         <Link href="#" className="hover:text-blue-900">
            <FaLinkedin />
         </Link>
         <Link href="#" className="hover:text-red-500">
            <FaEnvelope />
         </Link>
      </div>
   );
};

export default SocialIcons;
