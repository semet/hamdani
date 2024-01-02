import { useEffect, useState } from "react";

const useAosDirection = () => {
   const [directions, setDirections] = useState(["fade-down", "fade-up"]);
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
