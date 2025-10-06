'use client';
import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { CreditCard, Bitcoin, Building2, Smartphone, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripePaymentForm from '@/components/payment/stripe-payment-form';
import BitcoinPaymentForm from '@/components/payment/bitcoin-payment-form';
import { useCurrency } from '@/contexts/currency-context';
import { useState } from 'react';

// Initialize Stripe (in a real app, use your publishable key)
const stripePromise = loadStripe('pk_test_your_publishable_key_here');

const PaymentPage = () => {
  const { currency, formatPrice } = useCurrency();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('stripe');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const bookingDetails = {
    title: 'Mentawai Surf Adventure',
    destination: 'Mentawai Islands',
    date: '2023-11-15 to 2023-11-21',
    travelers: 2,
    price: 1299,
    currency: currency
  };

  const handlePaymentSuccess = () => {
    setIsProcessing(false);
    setPaymentStatus('success');
  };

  const handlePaymentError = (error: string) => {
    setIsProcessing(false);
    setPaymentStatus('error');
    setErrorMessage(error);
  };

  const handlePaymentSubmit = () => {
    setIsProcessing(true);
    setPaymentStatus('idle');
    
    // Simulate payment processing
    setTimeout(() => {
      if (selectedPaymentMethod === 'stripe') {
        // In a real app, this would be handled by the StripePaymentForm component
        handlePaymentSuccess();
      } else if (selectedPaymentMethod === 'crypto') {
        // In a real app, this would be handled by the BitcoinPaymentForm component
        handlePaymentSuccess();
      } else {
        // For other payment methods, redirect to respective payment gateway
        if (selectedPaymentMethod === 'bank') {
          window.open('https://wa.me/6281234567890?text=I%20want%20to%20pay%20via%20bank%20transfer', '_blank');
        } else if (selectedPaymentMethod === 'wa') {
          window.open('https://wa.me/6281234567890?text=I%20want%20to%20pay%20via%20WhatsApp', '_blank');
        }
      }
    }, 1000);
  };

  const renderPaymentForm = () => {
    if (paymentStatus === 'success') {
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
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your payment. We've received your booking and will send you a confirmation shortly.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
              <h4 className="font-medium text-gray-900 mb-2">Booking Details</h4>
              <div className="space-y-1 text-sm">
                <p><span className="text-gray-600">Reference:</span> <span className="font-mono">WB-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span></p>
                <p><span className="text-gray-600">Destination:</span> {bookingDetails.destination}</p>
                <p><span className="text-gray-600">Date:</span> {bookingDetails.date}</p>
                <p><span className="text-gray-600">Travelers:</span> {bookingDetails.travelers}</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                className="bg-green-600 hover:bg-green-700"
              >
                Chat on WhatsApp
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/'}>
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (paymentStatus === 'error') {
      return (
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h3>
            <p className="text-gray-600 mb-2">
              {errorMessage || 'An error occurred while processing your payment.'}
            </p>
            <p className="text-gray-600 mb-6">
              Please try again or contact support for assistance.
            </p>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={() => {
                  setPaymentStatus('idle');
                  setErrorMessage('');
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Try Again
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
              >
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (selectedPaymentMethod === 'stripe') {
      return (
        <Elements stripe={stripePromise}>
          <StripePaymentForm
            amount={bookingDetails.price}
            currency={bookingDetails.currency}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
          />
        </Elements>
      );
    }

    if (selectedPaymentMethod === 'crypto') {
      return (
        <BitcoinPaymentForm
          amount={bookingDetails.price}
          currency={bookingDetails.currency}
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
        />
      );
    }

    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Complete Your Payment</CardTitle>
          <CardDescription>
            You'll be redirected to complete your {selectedPaymentMethod} payment
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Amount:</span>
              <span className="font-medium">
                {formatPrice(bookingDetails.price)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Processing Fee:</span>
              <span className="font-medium">
                {formatPrice(Math.round(bookingDetails.price * 0.029 + 0.30))}
              </span>
            </div>
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
              <span className="font-medium">Total:</span>
              <span className="font-bold text-lg">
                {formatPrice(bookingDetails.price + Math.round(bookingDetails.price * 0.029 + 0.30))}
              </span>
            </div>
          </div>
          
          <Button
            onClick={handlePaymentSubmit}
            disabled={isProcessing}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing...
              </>
            ) : (
              `Pay with ${selectedPaymentMethod === 'crypto' ? 'Cryptocurrency' : 
                        selectedPaymentMethod === 'bank' ? 'Bank Transfer' : 
                        'WhatsApp'}`
            )}
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-pink-900/20"></div>
          <div className="absolute inset-0 bg-[url('/images/hero/padang-hero.svg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Badge className="mb-6 bg-purple-600 text-white">
              <CreditCard className="mr-2 h-4 w-4" />
              Secure Payment
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Complete Your <span className="text-purple-600">Booking</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Choose your preferred payment method and secure your West Sumatra adventure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Summary */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <Button
                    variant={selectedPaymentMethod === 'stripe' ? 'default' : 'outline'}
                    className="flex items-center space-x-3 h-auto p-4"
                    onClick={() => setSelectedPaymentMethod('stripe')}
                  >
                    <CreditCard className="h-6 w-6 text-blue-600" />
                    <div className="text-left">
                      <div className="font-medium">Credit/Debit Card</div>
                      <div className="text-sm text-gray-500">Secure payment with Stripe</div>
                    </div>
                  </Button>
                  
                  <Button
                    variant={selectedPaymentMethod === 'crypto' ? 'default' : 'outline'}
                    className="flex items-center space-x-3 h-auto p-4"
                    onClick={() => setSelectedPaymentMethod('crypto')}
                  >
                    <Bitcoin className="h-6 w-6 text-orange-500" />
                    <div className="text-left">
                      <div className="font-medium">Cryptocurrency</div>
                      <div className="text-sm text-gray-500">Bitcoin, Ethereum, and more</div>
                    </div>
                  </Button>
                  
                  <Button
                    variant={selectedPaymentMethod === 'bank' ? 'default' : 'outline'}
                    className="flex items-center space-x-3 h-auto p-4"
                    onClick={() => setSelectedPaymentMethod('bank')}
                  >
                    <Building2 className="h-6 w-6 text-green-600" />
                    <div className="text-left">
                      <div className="font-medium">Bank Transfer</div>
                      <div className="text-sm text-gray-500">Direct bank transfer</div>
                    </div>
                  </Button>
                  
                  <Button
                    variant={selectedPaymentMethod === 'wa' ? 'default' : 'outline'}
                    className="flex items-center space-x-3 h-auto p-4"
                    onClick={() => setSelectedPaymentMethod('wa')}
                  >
                    <Smartphone className="h-6 w-6 text-green-500" />
                    <div className="text-left">
                      <div className="font-medium">WhatsApp Pay</div>
                      <div className="text-sm text-gray-500">Pay via WhatsApp</div>
                    </div>
                  </Button>
                </div>
                
                {renderPaymentForm()}
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="sticky top-6">
                  <CardHeader>
                    <CardTitle>Booking Summary</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">{bookingDetails.title}</h3>
                      <p className="text-sm text-gray-600">{bookingDetails.destination}</p>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span>{bookingDetails.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Travelers:</span>
                        <span>{bookingDetails.travelers} {bookingDetails.travelers === 1 ? 'Person' : 'People'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base Price:</span>
                        <span>{formatPrice(bookingDetails.price)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Processing Fee:</span>
                        <span>{formatPrice(Math.round(bookingDetails.price * 0.029 + 0.30))}</span>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>{formatPrice(bookingDetails.price + Math.round(bookingDetails.price * 0.029 + 0.30))}</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      <p>• All prices are in {currency.toUpperCase()}</p>
                      <p>• Processing fee includes 2.9% + $0.30</p>
                      <p>• No hidden fees</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PaymentPage;