'use client';

import { useWhatsApp } from '@/lib/whatsapp';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface WhatsAppContactProps {
  tourName?: string;
  date?: string;
  participants?: number;
  variant?: 'button' | 'link' | 'icon';
  className?: string;
  message?: string;
}

export function WhatsAppContact({
  tourName,
  date,
  participants,
  variant = 'button',
  className = '',
  message,
}: WhatsAppContactProps) {
  const { openChat, openBookingInquiry } = useWhatsApp();
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    if (tourName) {
      openBookingInquiry(tourName, date, participants);
    } else if (message) {
      openChat({ message });
    } else {
      openChat();
    }
  };

  const commonProps = {
    onClick: handleWhatsAppClick,
    className: `flex items-center space-x-2 ${className}`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  switch (variant) {
    case 'icon':
      return (
        <Button
          variant="ghost"
          size="icon"
          {...commonProps}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="sr-only">Contact via WhatsApp</span>
        </Button>
      );

    case 'link':
      return (
        <button
          {...commonProps}
          className={`text-green-600 hover:text-green-700 font-medium ${className}`}
        >
          <MessageCircle className="h-4 w-4 mr-1" />
          Contact via WhatsApp
        </button>
      );

    case 'button':
    default:
      return (
        <Button
          {...commonProps}
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          {tourName ? `Book ${tourName}` : 'Contact via WhatsApp'}
        </Button>
      );
  }
}

// WhatsApp Status Component
interface WhatsAppStatusProps {
  phoneNumber?: string;
  className?: string;
}

export function WhatsAppStatus({ phoneNumber, className = '' }: WhatsAppStatusProps) {
  const [status, setStatus] = useState<'online' | 'offline' | 'loading'>('loading');
  const [lastSeen, setLastSeen] = useState<string>('');

  // In a real app, this would check the actual WhatsApp status
  // For demo purposes, we'll simulate it
  useState(() => {
    setTimeout(() => {
      setStatus('online');
    }, 1500);
  });

  const getStatusText = () => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'offline':
        return 'Offline';
      case 'loading':
        return 'Loading...';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'offline':
        return 'bg-gray-400';
      case 'loading':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`w-2 h-2 rounded-full ${getStatusColor()}`}></div>
      <span className="text-xs text-gray-600">{getStatusText()}</span>
    </div>
  );
}

// WhatsApp Phone Component
interface WhatsAppPhoneProps {
  phoneNumber?: string;
  className?: string;
}

export function WhatsAppPhone({ phoneNumber, className = '' }: WhatsAppPhoneProps) {
  const formattedNumber = phoneNumber || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+62 895-6105-24580';
  
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Phone className="h-4 w-4 text-green-600" />
      <span className="text-sm">{formattedNumber}</span>
    </div>
  );
}