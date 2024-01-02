import React, { FC } from "react";
import { FaMoon } from "react-icons/fa";

const ColorModeSwitcher: FC = () => {
   return (
      <button className="btn btn-circle btn-xs btn-ghost">
         <FaMoon />
      </button>
   );
};

export default ColorModeSwitcher;
