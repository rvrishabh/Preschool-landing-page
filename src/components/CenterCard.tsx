import React from "react";

interface CenterCardProps {
  title?: string;
  image: string;
  size?: string;
}

const CenterCard: React.FC<CenterCardProps> = ({ title, image, size }) => {
  return (
    <div
      className={`flex zoom text-center uppercase text-xs text-white justify-center items-end pb-4 ${image} bg-center bg-no-repeat bg-cover rounded-3xl ${size}`}
    >
      {title}
    </div>
  );
};

export default CenterCard;
