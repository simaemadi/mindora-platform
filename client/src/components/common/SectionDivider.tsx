import React from "react";

type SectionDividerProps = {
  className?: string;
  lineClassName?: string;
  dotClassName?: string;
};

export function SectionDivider({
  className = "",
  lineClassName = "bg-mustard-300",
  dotClassName = "bg-mustard-300",
}: SectionDividerProps) {
  return (
    <div className={`mx-auto mt-5 flex w-28 items-center justify-center ${className}`}>
      <span className={`h-px flex-1 ${lineClassName}`} />
      <span className={`mx-3 h-2 w-2 rounded-full ${dotClassName}`} />
      <span className={`h-px flex-1 ${lineClassName}`} />
    </div>
  );
}