'use client';

import { useEffect, useState } from 'react';

type WhatsAppButtonProps = {
  phoneNumber: string;          // e.g., "966512345678" (Saudi Arabia) or "1234567890"
  message?: string;             // Pre‑filled message (auto chat)
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'middle-right' | 'middle-left';
  offset?: string;              // e.g., "20px"
  size?: 'sm' | 'md' | 'lg';
  labelText?: string;
  showTooltip?: boolean;
  tooltipText?: string;
  backgroundColor?: string;
  iconColor?: string;
  className?: string;
};

const iconSizes = {
  sm: 20,
  md: 24,
  lg: 28,
};

const positionClasses = {
  'bottom-right': 'right-0 bottom-0',
  'bottom-left': 'left-0 bottom-0',
  'top-right': 'right-0 top-0',
  'top-left': 'left-0 top-0',
  'middle-right': 'right-0 top-1/2 -translate-y-1/2',
  'middle-left': 'left-0 top-1/2 -translate-y-1/2',
};

export default function WhatsAppButton({
  phoneNumber,
  message = 'Hello! I need more information about your services.',
  position = 'bottom-right',
  offset = '1.5rem',
  size = 'md',
  labelText = 'هل تحتاج إلى مساعدة؟',
  showTooltip = true,
  tooltipText = 'Chat with us on WhatsApp',
  backgroundColor = '#075f69',
  iconColor = '#ffffff',
  className = '',
}: WhatsAppButtonProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device by user agent or screen width
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
      setIsMobile(isMobileUA);
    };
    checkMobile();
  }, []);

  const formatPhoneNumber = (num: string): string => {
    // Remove any non‑digit characters
    let cleaned = num.replace(/\D/g, '');
    // Remove leading '+' or '00' if present
    if (cleaned.startsWith('00')) cleaned = cleaned.slice(2);
    // Ensure it starts with country code (optional, but recommended)
    return cleaned;
  };

  const getWhatsAppUrl = (): string => {
    const formattedNumber = formatPhoneNumber(phoneNumber);
    const encodedMessage = encodeURIComponent(message);
    
    if (isMobile) {
      // Mobile: use whatsapp:// (opens app directly)
      return `whatsapp://send?phone=${formattedNumber}&text=${encodedMessage}`;
    } else {
      // Desktop: use web.whatsapp.com (opens in browser)
      return `https://web.whatsapp.com/send?phone=${formattedNumber}&text=${encodedMessage}`;
    }
  };

  const handleClick = () => {
    const url = getWhatsAppUrl();
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const iconSize = iconSizes[size];
  const positionStyle = positionClasses[position];
  const offsetStyle: React.CSSProperties = {};

  if (position.startsWith('bottom')) {
    offsetStyle.bottom = offset;
  }
  if (position.startsWith('top')) {
    offsetStyle.top = offset;
  }
  if (position.endsWith('right')) {
    offsetStyle.right = offset;
  }
  if (position.endsWith('left')) {
    offsetStyle.left = offset;
  }

  const WhatsAppIcon = ({ size }: { size: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.52 3.48A11.94 11.94 0 0 0 12.001 0C5.373 0 0 5.373 0 12.002c0 2.106.547 4.175 1.586 5.994L0 24l5.43-1.42A11.952 11.952 0 0 0 12 24c6.627 0 12.001-5.373 12.001-11.999 0-3.203-1.249-6.209-3.48-8.52z"
        fill="#075f69"
      />
      <path
        d="M16.666 13.05c-.218-.11-1.29-.636-1.49-.71-.2-.074-.346-.11-.492.11-.147.218-.567.71-.695.856-.128.147-.256.166-.474.056-.218-.11-.918-.34-1.75-1.08-.648-.579-1.084-1.291-1.213-1.508-.128-.218-.014-.336.104-.455.107-.106.238-.256.357-.385.119-.128.158-.218.238-.365.08-.147.04-.278-.02-.386-.064-.108-.67-1.613-.92-2.21-.24-.58-.483-.5-.667-.51l-.572-.012c-.19 0-.395.07-.603.305-.207.236-.788.914-.788 2.225 0 1.31.81 2.58.924 2.755.11.173 1.6 2.45 3.88 3.43 1.36.61 1.78.65 2.14.59.343-.06 1.25-.51 1.43-1.01.18-.5.18-.93.125-1.01-.05-.08-.184-.13-.4-.24z"
        fill="#fff"
      />
    </svg>
  );

  return (
    <div
      className={`fixed ${positionStyle} z-50 group ${className}`}
      style={offsetStyle}
    >
      <button
        onClick={handleClick}
        className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white rounded-full shadow-2xl transition-shadow duration-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
        style={{ backgroundColor }}
        aria-label="Chat on WhatsApp"
      >
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-sm">
          <WhatsAppIcon size={iconSize} />
        </span>

        <span className="text-[0.72rem] leading-tight text-white font-semibold tracking-tight">
          {labelText}
        </span>
      </button>

      {showTooltip && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs py-1 px-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {tooltipText}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  );
}