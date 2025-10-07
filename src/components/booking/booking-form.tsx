'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, CreditCard, DollarSign, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

interface BookingFormProps {
  destination?: string;
  price?: number;
  title?: string;
  onClose?: () => void;
}

const BookingForm = ({ destination, price, title, onClose }: BookingFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: destination || '',
    date: '',
    travelers: 2,
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'card',
    currency: 'usd'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="destination" className="text-sm font-medium text-gray-700">
          Destination
        </Label>
        <Input
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleInputChange}
          placeholder="e.g., Mentawai Islands, Padang City"
          className="mt-1"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" suppressHydrationWarning>
        <div>
          <Label htmlFor="date" className="text-sm font-medium text-gray-700">
            Travel Date
          </Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleInputChange}
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="travelers" className="text-sm font-medium text-gray-700">
            Number of Travelers
          </Label>
          <select
            id="travelers"
            name="travelers"
            value={formData.travelers}
            onChange={handleInputChange}
            className="mt-1 w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="specialRequests" className="text-sm font-medium text-gray-700">
          Special Requests (Optional)
        </Label>
        <Textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleInputChange}
          placeholder="Any dietary restrictions, accessibility needs, or special preferences?"
          className="mt-1"
          rows={3}
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Full Name
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="John Doe"
          className="mt-1"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" suppressHydrationWarning>
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@example.com"
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+62 812 3456 7890"
            className="mt-1"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="currency" className="text-sm font-medium text-gray-700">
          Preferred Currency
        </Label>
        <select
          id="currency"
          name="currency"
          value={formData.currency}
          onChange={handleInputChange}
          className="mt-1 w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
        >
          <option value="usd">USD - US Dollar</option>
          <option value="eur">EUR - Euro</option>
          <option value="idr">IDR - Indonesian Rupiah</option>
        </select>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <Label className="text-sm font-medium text-gray-700">Payment Method</Label>
        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2" suppressHydrationWarning>
          <div className="flex items-center">
            <input
              id="payment-card"
              name="paymentMethod"
              type="radio"
              value="card"
              checked={formData.paymentMethod === 'card'}
              onChange={handleInputChange}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
            />
            <label htmlFor="payment-card" className="ml-3 block text-sm font-medium text-gray-700">
              Credit/Debit Card
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="payment-bank"
              name="paymentMethod"
              type="radio"
              value="bank"
              checked={formData.paymentMethod === 'bank'}
              onChange={handleInputChange}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
            />
            <label htmlFor="payment-bank" className="ml-3 block text-sm font-medium text-gray-700">
              Bank Transfer
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="payment-crypto"
              name="paymentMethod"
              type="radio"
              value="crypto"
              checked={formData.paymentMethod === 'crypto'}
              onChange={handleInputChange}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
            />
            <label htmlFor="payment-crypto" className="ml-3 block text-sm font-medium text-gray-700">
              Cryptocurrency
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="payment-wa"
              name="paymentMethod"
              type="radio"
              value="wa"
              checked={formData.paymentMethod === 'wa'}
              onChange={handleInputChange}
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
            />
            <label htmlFor="payment-wa" className="ml-3 block text-sm font-medium text-gray-700">
              WhatsApp Payment
            </label>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">Booking Summary</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Destination:</span>
            <span className="font-medium">{formData.destination}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">{formData.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Travelers:</span>
            <span className="font-medium">{formData.travelers} {formData.travelers === 1 ? 'Person' : 'People'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Estimated Price:</span>
            <span className="font-medium">
              {formData.currency === 'usd' ? `$${price || 0}` : 
               formData.currency === 'eur' ? `€${price || 0}` : 
               `IDR ${(price || 0 * 15000).toLocaleString('en-US')}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </motion.div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for your booking. We'll send you a confirmation email shortly with all the details.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <h4 className="font-medium text-gray-900 mb-2">Booking Details</h4>
            <div className="space-y-1 text-sm">
              <p><span className="text-gray-600">Reference:</span> <span className="font-mono">WB-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span></p>
              <p><span className="text-gray-600">Destination:</span> {formData.destination}</p>
              <p><span className="text-gray-600">Date:</span> {formData.date}</p>
              <p><span className="text-gray-600">Travelers:</span> {formData.travelers}</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button 
              onClick={() => window.open('https://wa.me/62895610524580', '_blank')}
              className="bg-green-600 hover:bg-green-700"
            >
              Chat on WhatsApp
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Book Your Trip</CardTitle>
            <CardDescription>
              {title || 'Complete your booking in 3 simple steps'}
            </CardDescription>
          </div>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              ✕
            </Button>
          )}
        </div>
        
        <div className="flex items-center space-x-2 mt-4">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {num}
              </div>
              {num < 3 && (
                <div className={`w-8 h-0.5 ${step > num ? 'bg-blue-600' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
          <div className="ml-2 text-sm text-gray-500">
            {step === 1 && 'Details'} {step === 2 && 'Contact'} {step === 3 && 'Payment'}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          
          <div className="flex justify-between pt-6">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
            )}
            
            <div className="ml-auto">
              {step < 3 ? (
                <Button type="button" onClick={nextStep}>
                  Continue
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
                  {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                </Button>
              )}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;