import useToggleTheme from "@/hooks/use-toggle-theme";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = () => {
   const [mounted, setMounted] = useState(false);

   const { systemTheme, theme, setTheme } = useToggleTheme();

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) return null;
   const currentTheme = theme === "system" ? systemTheme : theme;
   return (
      <button
         className="btn btn-circle btn-sm bg-amber-300 hover:bg-amber-500 dark:hover:bg-slate-200 dark:bg-white text-slate-50 dark:text-amber-300"
         onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      >
         {currentTheme === "dark" ? <FaMoon /> : <FaSun />}
      </button>
   );
};

export default ColorModeSwitcher;
