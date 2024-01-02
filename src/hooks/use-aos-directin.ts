import { useEffect, useState } from "react";

const useAosDirection = () => {
   const [directions, setDirections] = useState([
      "fade-left",
      "fade-right",
      "fade-down",
      "fade-up",
   ]);
   const [index, setIndex] = useState(0);

   useEffect(() => {
      setIndex(Math.floor(Math.random() * directions.length));
   }, [directions.length]);

   return {
      directions,
      index,
   };
};

export default useAosDirection;
