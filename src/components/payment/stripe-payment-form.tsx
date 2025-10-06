'use client';

import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

interface StripePaymentFormProps {
  amount: number;
  currency: string;
  onSuccess: () => void;
  onError: (error: string) => void;
}

const StripePaymentForm = ({ amount, currency, onSuccess, onError }: StripePaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardComplete, setCardComplete] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !cardComplete) {
      return;
    }

    setIsProcessing(true);

    try {
      // Create payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        elements: elements,
      });

      if (error) {
        throw error;
      }

      // In a real app, you would send this paymentMethod.id to your backend
      // to create a payment intent and confirm the payment
      console.log('Payment Method ID:', paymentMethod.id);
      
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        onSuccess();
      }, 2000);

    } catch (error: any) {
      setIsProcessing(false);
      onError(error.message || 'An error occurred during payment');
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CreditCard className="h-5 w-5 text-blue-600" />
          <span>Payment Details</span>
        </CardTitle>
        <CardDescription>
          Enter your card details to complete the payment
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="card-element">Card Information</Label>
            <div className="mt-1 p-3 border border-gray-300 rounded-lg">
              <CardElement
                id="card-element"
                options={cardStyle}
                onChange={(e: any) => setCardComplete(e.complete)}
                className="p-2"
              />
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Amount:</span>
              <span className="font-medium">
                {currency === 'usd' ? `$${amount}` : 
                 currency === 'eur' ? `€${amount}` : 
                 `IDR ${amount.toLocaleString('en-US')}`}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Processing Fee:</span>
              <span className="font-medium">
                {currency === 'usd' ? `$${Math.round(amount * 0.029 + 0.30)}` : 
                 currency === 'eur' ? `€${Math.round(amount * 0.029 + 0.30)}` : 
                 `IDR ${Math.round(amount * 0.029 + 0.30).toLocaleString('en-US')}`}
              </span>
            </div>
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
              <span className="font-medium">Total:</span>
              <span className="font-bold text-lg">
                {currency === 'usd' ? `$${amount + Math.round(amount * 0.029 + 0.30)}` : 
                 currency === 'eur' ? `€${amount + Math.round(amount * 0.029 + 0.30)}` : 
                 `IDR ${(amount + Math.round(amount * 0.029 + 0.30)).toLocaleString('en-US')}`}
              </span>
            </div>
          </div>
          
          <Button
            type="submit"
            disabled={!stripe || !cardComplete || isProcessing}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              'Pay Now'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StripePaymentForm;