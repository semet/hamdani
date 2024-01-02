import Image from "next/image";
import React, { FC, useEffect, useState } from "react";

type Props = {
   name: string;
   image: string;
};

const StackCard: FC<Props> = ({ image, name }) => {
   return (
      <div className="w-14 cursor-pointer tooltip tooltip-bottom" data-tip={name}>
         <Image src={image} width={120} height={120} alt={name} />
      </div>
   );
};

export default StackCard;
