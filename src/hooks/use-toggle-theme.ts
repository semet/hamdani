import { useTheme } from "next-themes";
import { useEffect } from "react";

const useToggleTheme = () => {
   const { systemTheme, theme, setTheme } = useTheme();

   useEffect(() => {
      if (theme) {
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
