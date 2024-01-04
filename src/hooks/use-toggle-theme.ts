import { useTheme } from "next-themes";
import { useEffect } from "react";

const useToggleTheme = () => {
   const { systemTheme, theme, setTheme } = useTheme();

   useEffect(() => {
      if (theme) {
         // if (theme === "dark") {
         //    document.documentElement.classList.add("dark");
         // } else {
         //    document.documentElement.classList.remove("dark");
         // }
         document.querySelector("html")?.setAttribute("data-theme", theme);
      }
   }, [theme]);
   return {
      systemTheme,
      theme,
      setTheme,
   };
};

export default useToggleTheme;
