import React, { useState } from "react";

export function ToggleGroup({ children, value, onValueChange }) {
  return (
    <div className="flex space-x-6">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          isSelected: child.props.value === value,
          onClick: () => onValueChange(child.props.value),
        });
      })}
    </div>
  );
}

ToggleGroup.Item = function ToggleGroupItem({
  children,
  value,
  isSelected,
  onClick,
}) {
  return (
    <button
      className={`pb-2 text-sm tracking-[0.15em] border-b-2 transition-colors ${
        isSelected
          ? " border-white border-b-2 text-white"
          : "text-white border-transparent  hover:border-gray-400"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ToggleGroup;
