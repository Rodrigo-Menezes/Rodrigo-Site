import Image from 'next/image';
import React from 'react';

const DiamondImage = ({ imageUrl }) => {
  return (
    <div className="relative w-40 h-40">
      <div className="w-full h-full mask mask-diamond bg-gray-500">
        <Image src={imageUrl} alt="Diamond" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default DiamondImage;