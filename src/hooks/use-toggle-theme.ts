import { useTheme } from "next-themes";
import { useEffect } from "react";

const useToggleTheme = () => {
   const { systemTheme, theme, setTheme } = useTheme();

   useEffect(() => {
      if (theme && systemTheme) {
         document
            .querySelector("html")
            ?.setAttribute("data-theme", theme === "system" ? systemTheme : theme);
      }
   }, [theme, systemTheme]);
   return {
      systemTheme,
      theme,
      setTheme,
   };
};

export default useToggleTheme;
