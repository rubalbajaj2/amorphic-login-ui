export const AnalyticsIllustration = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Background Elements */}
        <circle cx="320" cy="80" r="40" fill="rgba(255,255,255,0.1)" />
        <circle cx="80" cy="250" r="30" fill="rgba(255,255,255,0.08)" />
        
        {/* Chair */}
        <rect x="140" y="180" width="120" height="80" rx="8" fill="#2D3748" />
        <rect x="150" y="160" width="100" height="20" rx="10" fill="#4A5568" />
        <rect x="130" y="260" width="140" height="8" rx="4" fill="#2D3748" />
        
        {/* Person */}
        <circle cx="200" cy="140" r="25" fill="#E2E8F0" />
        <rect x="175" y="165" width="50" height="60" rx="25" fill="#90CDF4" />
        <rect x="165" y="190" width="25" height="40" rx="12" fill="#63B3ED" />
        <rect x="210" y="190" width="25" height="40" rx="12" fill="#63B3ED" />
        <rect x="170" y="225" width="60" height="35" rx="8" fill="#4299E1" />
        
        {/* Hair */}
        <path d="M175 125 Q200 115 225 125 Q225 140 200 145 Q175 140 175 125 Z" fill="#2D3748" />
        
        {/* Laptop */}
        <rect x="170" y="200" width="60" height="35" rx="4" fill="#1A202C" />
        <rect x="175" y="205" width="50" height="25" rx="2" fill="#2B6CB0" />
        <rect x="180" y="210" width="40" height="15" rx="1" fill="#3182CE" />
        
        {/* Floating UI Card */}
        <g transform="translate(280, 120)">
          <rect width="100" height="80" rx="8" fill="white" fillOpacity="0.95" />
          <circle cx="20" cy="20" r="8" fill="#4299E1" />
          <rect x="35" y="15" width="50" height="4" rx="2" fill="#CBD5E0" />
          <rect x="35" y="25" width="30" height="4" rx="2" fill="#CBD5E0" />
          <rect x="15" y="40" width="70" height="3" rx="1" fill="#E2E8F0" />
          <rect x="15" y="48" width="70" height="3" rx="1" fill="#E2E8F0" />
          <rect x="15" y="60" width="35" height="12" rx="6" fill="#4299E1" />
          <rect x="55" y="60" width="25" height="12" rx="6" fill="#E2E8F0" />
        </g>
        
        {/* Data Chart */}
        <g transform="translate(50, 100)">
          <rect width="80" height="60" rx="6" fill="white" fillOpacity="0.9" />
          <rect x="10" y="40" width="8" height="15" fill="#4299E1" />
          <rect x="22" y="30" width="8" height="25" fill="#63B3ED" />
          <rect x="34" y="35" width="8" height="20" fill="#90CDF4" />
          <rect x="46" y="25" width="8" height="30" fill="#BEE3F8" />
          <rect x="58" y="32" width="8" height="23" fill="#4299E1" />
          <circle cx="70" cy="15" r="3" fill="#4299E1" />
          <text x="15" y="15" fontSize="8" fill="#4A5568">Analytics</text>
        </g>
        
        {/* Security Badge */}
        <g transform="translate(320, 200)">
          <circle r="20" fill="#2D3748" fillOpacity="0.8" />
          <path d="M-8 -5 L0 -10 L8 -5 L8 5 L0 10 L-8 5 Z" fill="white" />
          <circle r="3" fill="#4299E1" />
        </g>
        
        {/* Geometric Shapes */}
        <rect x="60" y="40" width="12" height="12" rx="2" fill="rgba(255,255,255,0.2)" transform="rotate(45 66 46)" />
        <rect x="330" y="160" width="10" height="10" rx="2" fill="rgba(255,255,255,0.15)" transform="rotate(30 335 165)" />
        
        {/* Connection Lines */}
        <path d="M250 160 Q300 140 320 120" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" strokeDasharray="4,4" />
        <path d="M150 140 Q100 120 80 140" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" strokeDasharray="4,4" />
      </svg>
    </div>
  );
};