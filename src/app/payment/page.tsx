'use client';
import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { CreditCard, Bitcoin, Building2, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
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
      } else if (selectedPaymentMethod === 'bank') {
        // For bank transfer, redirect to WhatsApp
        window.open('https://wa.me/62895610524580?text=I%20want%20to%20pay%20via%20bank%20transfer', '_blank');
        setIsProcessing(false);
      }
    }, 1000);
  };

  const renderPaymentForm = () => {
    if (paymentStatus === 'success') {
      return (
        <Card className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
            </motion.div>
            
            <h3 className="text-3xl font-bold text-black dark:text-white mb-3" style={{ fontWeight: 800 }}>
              Payment Successful!
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-base">
              Thank you for your payment. We&apos;ve received your booking and will send you a confirmation shortly.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-8 text-left border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-black dark:text-white mb-4 text-lg">Booking Details</h4>
              <div className="space-y-3 text-sm">
                <p className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Reference:</span> 
                  <span className="font-mono text-black dark:text-white font-semibold">WB-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Destination:</span> 
                  <span className="text-black dark:text-white font-semibold">{bookingDetails.destination}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Date:</span> 
                  <span className="text-black dark:text-white font-semibold">{bookingDetails.date}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Travelers:</span> 
                  <span className="text-black dark:text-white font-semibold">{bookingDetails.travelers}</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={() => window.open('https://wa.me/62895610524580', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white py-6 text-base font-semibold rounded-full shadow-sm hover:shadow-md"
              >
                Chat on WhatsApp
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/'}
                className="border-2 border-gray-400 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 py-6 text-base font-semibold rounded-full"
              >
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (paymentStatus === 'error') {
      return (
        <Card className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg">
          <CardContent className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-10 w-10 text-red-600 dark:text-red-400" />
              </div>
            </motion.div>
            
            <h3 className="text-3xl font-bold text-black dark:text-white mb-3" style={{ fontWeight: 800 }}>
              Payment Failed
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2 text-base">
              {errorMessage || 'An error occurred while processing your payment.'}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-base">
              Please try again or contact support for assistance.
            </p>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={() => {
                  setPaymentStatus('idle');
                  setErrorMessage('');
                }}
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 py-6 text-base font-semibold rounded-full shadow-sm hover:shadow-md"
              >
                Try Again
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open('https://wa.me/62895610524580', '_blank')}
                className="border-2 border-gray-400 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 py-6 text-base font-semibold rounded-full"
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
      <Card className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-lg">
        <CardHeader className="p-8 pb-4">
          <CardTitle className="text-2xl font-bold text-black dark:text-white" style={{ fontWeight: 800 }}>
            Complete Your Payment
          </CardTitle>
          <CardDescription className="text-gray-700 dark:text-gray-300 text-base">
            You&apos;ll be redirected to complete your {selectedPaymentMethod === 'bank' ? 'bank transfer' : selectedPaymentMethod} payment
          </CardDescription>
        </CardHeader>
        
        <CardContent className="px-8 pb-8 space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Amount:</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {formatPrice(bookingDetails.price)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Processing Fee:</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {formatPrice(Math.round(bookingDetails.price * 0.029 + 0.30))}
              </span>
            </div>
            <div className="flex justify-between items-center pt-3 mt-3 border-t-2 border-gray-300 dark:border-gray-600">
              <span className="font-bold text-lg text-gray-900 dark:text-white">Total:</span>
              <span className="font-bold text-2xl text-gray-900 dark:text-white">
                {formatPrice(bookingDetails.price + Math.round(bookingDetails.price * 0.029 + 0.30))}
              </span>
            </div>
          </div>
          
          <Button
            onClick={handlePaymentSubmit}
            disabled={isProcessing}
            className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 py-6 text-base font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white dark:border-black mr-2"></div>
                Processing...
              </>
            ) : (
              `Pay with ${selectedPaymentMethod === 'bank' ? 'Bank Transfer' : 'Card'}`
            )}
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-black dark:via-gray-900/30 dark:to-black transition-colors duration-300 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-3">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=600&auto=format&fit=crop"
              alt="Secure online payment for West Sumatra tours"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop"
              alt="Easy booking and payment process"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-black dark:bg-white text-white dark:text-black px-4 py-2">
              <CreditCard className="mr-2 h-4 w-4" />
              Secure Payment
            </Badge>
            
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black dark:text-white mb-6 tracking-tight leading-tight"
              style={{ fontWeight: 900, letterSpacing: '-0.05em' }}
            >
              Complete Your Booking
            </h1>
            
            <p
              className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ letterSpacing: '-0.02em' }}
            >
              Choose your preferred payment method and secure your West Sumatra adventure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Summary */}
      <section className="py-32 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2
                  className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-8"
                  style={{ fontWeight: 800, letterSpacing: '-0.03em' }}
                >
                  Select Payment Method
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    onClick={() => setSelectedPaymentMethod('stripe')}
                    className="cursor-pointer"
                  >
                    <Card className={`h-full overflow-hidden bg-white dark:bg-gray-900 border-2 transition-all duration-300 hover:shadow-xl rounded-2xl ${
                      selectedPaymentMethod === 'stripe' 
                        ? 'border-black dark:border-white' 
                        : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <CreditCard className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-black dark:text-white mb-1">Credit/Debit Card</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Secure payment with Stripe</p>
                          </div>
                    </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    onClick={() => setSelectedPaymentMethod('crypto')}
                    className="cursor-pointer"
                  >
                    <Card className={`h-full overflow-hidden bg-white dark:bg-gray-900 border-2 transition-all duration-300 hover:shadow-xl rounded-2xl ${
                      selectedPaymentMethod === 'crypto' 
                        ? 'border-black dark:border-white' 
                        : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                            <Bitcoin className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-black dark:text-white mb-1">Cryptocurrency</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Bitcoin, Ethereum, and more</p>
                          </div>
                    </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    onClick={() => setSelectedPaymentMethod('bank')}
                    className="cursor-pointer"
                  >
                    <Card className={`h-full overflow-hidden bg-white dark:bg-gray-900 border-2 transition-all duration-300 hover:shadow-xl rounded-2xl ${
                      selectedPaymentMethod === 'bank' 
                        ? 'border-black dark:border-white' 
                        : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                            <Building2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-black dark:text-white mb-1">Bank Transfer</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Direct bank transfer</p>
                    </div>
                    </div>
                      </CardContent>
                    </Card>
                  </motion.div>
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
                <Card className="sticky top-6 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-lg">
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-2xl font-bold text-black dark:text-white" style={{ fontWeight: 800 }}>
                      Booking Summary
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="px-8 pb-8 space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <h3 className="font-bold text-lg text-black dark:text-white mb-1">{bookingDetails.title}</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {bookingDetails.destination}
                      </p>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-800">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Date:</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{bookingDetails.date}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-800">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Travelers:</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{bookingDetails.travelers} {bookingDetails.travelers === 1 ? 'Person' : 'People'}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-800">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Base Price:</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{formatPrice(bookingDetails.price)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-800">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Processing Fee:</span>
                        <span className="text-gray-900 dark:text-white font-semibold">{formatPrice(Math.round(bookingDetails.price * 0.029 + 0.30))}</span>
                      </div>
                    </div>
                    
                    <div className="bg-black dark:bg-white p-4 rounded-xl">
                      <div className="flex justify-between items-center">
                        <span className="text-white dark:text-black font-bold text-lg">Total:</span>
                        <span className="text-white dark:text-black font-bold text-2xl">{formatPrice(bookingDetails.price + Math.round(bookingDetails.price * 0.029 + 0.30))}</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1 pt-2">
                      <p>• All prices are in {currency.toUpperCase()}</p>
                      <p>• Processing fee includes 2.9% + $0.30</p>
                      <p>• No hidden fees or surprises</p>
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