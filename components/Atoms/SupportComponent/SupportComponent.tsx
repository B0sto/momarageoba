import React from "react";

interface SupportComponentProps {
  icon: React.ComponentType;
  number: string;
  text: string;
}

const SupportComponent: React.FC<SupportComponentProps> = ({
  icon: Icon,
  number,
  text,
}) => {
  return (
    <div className="px-2 py-1 font-quicksand flex items-center gap-x-3">
      <Icon />
      <div className="flex flex-col">
        <span className="text-lg font-medium text-green-600 whitespace-nowrap">{number}</span>
        <span className="text-sm text-gray-600">{text}</span>
      </div>
    </div>
  );
};

export default SupportComponent;
