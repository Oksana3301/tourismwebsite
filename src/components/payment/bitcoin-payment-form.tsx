'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Wallet, QrCode, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BitcoinPaymentFormProps {
  amount: number;
  currency: string;
  onSuccess: () => void;
  onError: (error: string) => void;
}

const BitcoinPaymentForm = ({ amount, currency, onSuccess, onError }: BitcoinPaymentFormProps) => {
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
  const [walletAddress, setWalletAddress] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const cryptoOptions = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', icon: Bitcoin },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', icon: Bitcoin },
    { id: 'usdt', name: 'Tether', symbol: 'USDT', icon: Bitcoin },
  ];

  const cryptoRates = {
    bitcoin: 0.000023, // 1 USD = 0.000023 BTC
    ethereum: 0.00048,  // 1 USD = 0.00048 ETH
    usdt: 0.000023,    // 1 USD = 0.000023 USDT
  };

  const calculateCryptoAmount = () => {
    const rate = cryptoRates[selectedCrypto as keyof typeof cryptoRates];
    return (amount * rate).toFixed(8);
  };

  const handlePaymentSubmit = () => {
    if (!walletAddress) {
      setErrorMessage('Please enter your wallet address');
      onError('Please enter your wallet address');
      return;
    }

    setIsProcessing(true);
    setPaymentStatus('pending');

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStatus('success');
    }, 3000);
  };

  const handleCopyAddress = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Address copied to clipboard!');
  };

  const renderPaymentStatus = () => {
    if (paymentStatus === 'success') {
      return (
        <div className="text-center py-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </motion.div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Received!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for your payment. Your booking has been confirmed.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <h4 className="font-medium text-gray-900 mb-2">Payment Details</h4>
            <div className="space-y-1 text-sm">
              <p><span className="text-gray-600">Amount:</span> {calculateCryptoAmount()} {selectedCrypto.toUpperCase()}</p>
              <p><span className="text-gray-600">Address:</span> {walletAddress}</p>
              <p><span className="text-gray-600">Status:</span> <Badge className="bg-green-100 text-green-800">Confirmed</Badge></p>
            </div>
          </div>
          
          <Button onClick={onSuccess} className="w-full">
            Continue
          </Button>
        </div>
      );
    }

    if (paymentStatus === 'error') {
      return (
        <div className="text-center py-8">
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
          
          <div className="flex gap-3">
            <Button onClick={() => setPaymentStatus('idle')} className="flex-1">
              Try Again
            </Button>
            <Button variant="outline" onClick={() => onError('Contact support')} className="flex-1">
              Contact Support
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div>
          <Label>Select Cryptocurrency</Label>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {cryptoOptions.map((crypto) => {
              const Icon = crypto.icon;
              return (
                <Button
                  key={crypto.id}
                  variant={selectedCrypto === crypto.id ? 'default' : 'outline'}
                  className="flex flex-col items-center space-y-2 h-auto p-3"
                  onClick={() => setSelectedCrypto(crypto.id)}
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-xs">{crypto.symbol}</span>
                </Button>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Amount:</span>
            <span className="font-medium">
              {calculateCryptoAmount()} {selectedCrypto.toUpperCase()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Equivalent:</span>
            <span className="font-medium">
              {currency === 'usd' ? `$${amount}` : 
               currency === 'eur' ? `€${amount}` : 
               `IDR ${amount.toLocaleString('en-US')}`}
            </span>
          </div>
        </div>

        <div>
          <Label htmlFor="wallet-address">Your Wallet Address</Label>
          <div className="mt-1 flex">
            <Input
              id="wallet-address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="Enter your wallet address"
              className="rounded-r-none"
            />
            <Button
              variant="outline"
              onClick={() => handleCopyAddress(walletAddress)}
              className="rounded-l-none border-l-0"
            >
              <QrCode className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            We'll send the payment instructions to this address
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Payment Instructions</h4>
          <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>Send {calculateCryptoAmount()} {selectedCrypto.toUpperCase()} to the provided address</li>
            <li>Wait for blockchain confirmation (usually 3-6 confirmations)</li>
            <li>Once confirmed, your booking will be automatically processed</li>
          </ol>
        </div>

        <Button
          onClick={handlePaymentSubmit}
          disabled={isProcessing || !walletAddress}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            'Send Payment'
          )}
        </Button>
      </div>
    );
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bitcoin className="h-5 w-5 text-orange-500" />
          <span>Cryptocurrency Payment</span>
        </CardTitle>
        <CardDescription>
          Pay with {selectedCrypto === 'bitcoin' ? 'Bitcoin' : 
                   selectedCrypto === 'ethereum' ? 'Ethereum' : 
                   'Tether (USDT)'}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {renderPaymentStatus()}
      </CardContent>
    </Card>
  );
};

export default BitcoinPaymentForm;