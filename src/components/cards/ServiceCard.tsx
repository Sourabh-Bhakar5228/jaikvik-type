import type React from "react";
import type serviceInterface from "../../interfaces/serviceInterface";

interface ServerCardInterface extends serviceInterface {
  handleHover: (value: boolean) => void;
  className?: string;
}

const ServiceCard: React.FC<ServerCardInterface> = ({
  handleHover,
  badge = "",
  description = "",
  mainImg = "",
  title = "",
  className = "",
}) => {
  return (
    <div
      className={`group/card h-[300px] rounded-lg relative overflow-hidden ${className}`}
      onMouseEnter={() => {
        handleHover(true);
      }}
      onMouseLeave={() => {
        handleHover(false);
      }}
    >
      {badge && badge !== "" && (
        <div className="absolute top-0 opacity-0 group-hover/card:top-2 group-hover/card:opacity-100 transition-all duration-300 px-3 py-1 text-sm right-2 rounded-2xl text-white font-semibold bg-main-red z-10">
          {badge}
        </div>
      )}

      <img
        src={mainImg as string}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 w-full p-4">
          <h2 className="font-bold text-lg text-white mb-2">{title}</h2>
          <p className="text-gray-300 text-sm leading-4">{description}</p>
          <button className="mt-3 text-white text-sm font-medium hover:underline">
            Learn more →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
