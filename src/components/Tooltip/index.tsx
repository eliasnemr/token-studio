import React, { useState, useRef } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-pointer"
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          className="absolute z-50 w-64 p-3 text-sm text-black dark:text-white bg-white dark:bg-black  rounded-lg shadow-lg backdrop-blur-sm transition-opacity duration-200 right-0 top-full mt-2"
          style={{
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="absolute -top-2 right-4 w-4 h-4 bg-white dark:bg-black transform rotate-45" />
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
