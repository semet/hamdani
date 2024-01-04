const useScrollTop = () => {
   const handleScrollTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return {
      handleScrollTop,
   };
};

export default useScrollTop;
