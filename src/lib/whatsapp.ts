export interface WhatsAppMessageOptions {
  phoneNumber?: string;
  message?: string;
  template?: string;
}

export class WhatsAppService {
  private static readonly DEFAULT_PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '62895610524580';
  private static readonly BASE_URL = 'https://wa.me';

  /**
   * Opens WhatsApp with a pre-filled message
   * @param options - Configuration options for the WhatsApp message
   */
  static openChat(options: WhatsAppMessageOptions = {}): void {
    const phoneNumber = options.phoneNumber?.replace('+', '') || this.DEFAULT_PHONE_NUMBER;
    const message = options.message || this.getDefaultMessage(options.template);
    
    const encodedMessage = encodeURIComponent(message);
    const url = `${this.BASE_URL}/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /**
   * Generates a default message based on the template
   * @param template - The template type
   * @returns The formatted message
   */
  private static getDefaultMessage(template?: string): string {
    switch (template) {
      case 'booking':
        return 'Hello! I\'m interested in booking a tour with WisataPadang.';
      
      case 'mentawai-surf':
        return 'Hello! I\'m interested in booking a Mentawai surf package. Can you provide more details?';
      
      case 'padang-culture':
        return 'Hello! I\'m interested in booking a Padang culture tour. Can you provide more details?';
      
      case 'general-inquiry':
        return 'Hello! I have a question about your tours.';
      
      case 'payment':
        return 'Hello! I need help with payment for my booking.';
      
      case 'cancellation':
        return 'Hello! I need information about cancelling my booking.';
      
      case 'availability':
        return 'Hello! I\'d like to check availability for a specific date.';
      
      default:
        return 'Hello! I\'m interested in your tours. Can you provide more information?';
    }
  }

  /**
   * Opens WhatsApp with a booking inquiry for a specific tour
   * @param tourName - The name of the tour
   * @param date - The preferred date (optional)
   * @param participants - Number of participants (optional)
   */
  static openBookingInquiry(
    tourName: string, 
    date?: string, 
    participants?: number
  ): void {
    let message = `Hello! I'm interested in booking the ${tourName}.`;
    
    if (date) {
      message += `\n\nPreferred date: ${date}`;
    }
    
    if (participants) {
      message += `\n\nNumber of participants: ${participants}`;
    }
    
    message += '\n\nCan you provide more details and pricing?';
    
    this.openChat({ message });
  }

  /**
   * Opens WhatsApp with a support inquiry
   * @param issue - The issue or question
   */
  static openSupportInquiry(issue: string): void {
    const message = `Hello! I need help with the following:\n\n${issue}`;
    this.openChat({ message });
  }

  /**
   * Validates a WhatsApp phone number
   * @param phoneNumber - The phone number to validate
   * @returns Whether the phone number is valid
   */
  static isValidPhoneNumber(phoneNumber: string): boolean {
    // Remove all non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    // Check if it starts with country code (62 for Indonesia)
    if (!cleaned.startsWith('62')) {
      return false;
    }
    
    // Check length (should be 10-12 digits after country code)
    const lengthAfterCountryCode = cleaned.length - 2;
    return lengthAfterCountryCode >= 10 && lengthAfterCountryCode <= 12;
  }

  /**
   * Formats a phone number for WhatsApp
   * @param phoneNumber - The phone number to format
   * @returns The formatted phone number
   */
  static formatPhoneNumber(phoneNumber: string): string {
    // Remove all non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    // Ensure it starts with 62 (Indonesia country code)
    if (cleaned.startsWith('0')) {
      return '62' + cleaned.substring(1);
    } else if (cleaned.startsWith('62')) {
      return cleaned;
    } else if (!cleaned.startsWith('+')) {
      return '62' + cleaned;
    }
    
    return cleaned;
  }
}

// Helper hooks for React components
export function useWhatsApp() {
  const openChat = (options?: WhatsAppMessageOptions) => {
    WhatsAppService.openChat(options);
  };

  const openBookingInquiry = (
    tourName: string, 
    date?: string, 
    participants?: number
  ) => {
    WhatsAppService.openBookingInquiry(tourName, date, participants);
  };

  const openSupportInquiry = (issue: string) => {
    WhatsAppService.openSupportInquiry(issue);
  };

  return {
    openChat,
    openBookingInquiry,
    openSupportInquiry,
  };
}