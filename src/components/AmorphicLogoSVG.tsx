export const AmorphicLogoSVG = ({ className = "h-8" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Blue triangular/geometric shape representing the Amorphic logo */}
        <path 
          d="M8 24L16 8L24 24H20L16 16L12 24H8Z" 
          fill="rgb(var(--primary-500))" 
        />
        <circle 
          cx="16" 
          cy="20" 
          r="2" 
          fill="rgb(var(--primary-500))" 
        />
      </svg>
      <span className="text-xl font-semibold text-primary">
        Amorphic
      </span>
    </div>
  );
};