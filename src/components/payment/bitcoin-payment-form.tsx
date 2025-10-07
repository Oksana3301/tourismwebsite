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

  const recipientAddress = '0xb4cFcCCA925d6f33AFB8dC948e474EDfD0703f4a';

  const handlePaymentSubmit = () => {
    setIsProcessing(true);
    setPaymentStatus('pending');

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStatus('success');
      onSuccess();
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
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payment Received!</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Thank you for your payment. Your booking has been confirmed.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6 text-left border border-gray-200 dark:border-gray-700">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Payment Details</h4>
            <div className="space-y-1 text-sm">
              <p><span className="text-gray-600 dark:text-gray-400">Amount:</span> <span className="text-gray-900 dark:text-white">{calculateCryptoAmount()} {selectedCrypto.toUpperCase()}</span></p>
              <p><span className="text-gray-600 dark:text-gray-400">Status:</span> <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">Confirmed</Badge></p>
            </div>
          </div>
          
          <Button onClick={onSuccess} className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100">
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
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payment Failed</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            {errorMessage || 'An error occurred while processing your payment.'}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Please try again or contact support for assistance.
          </p>
          
          <div className="flex gap-3">
            <Button onClick={() => setPaymentStatus('idle')} className="flex-1 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100">
              Try Again
            </Button>
            <Button variant="outline" onClick={() => onError('Contact support')} className="flex-1 border-gray-400 dark:border-gray-600">
              Contact Support
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div>
          <Label className="text-gray-900 dark:text-white font-semibold mb-3 block">Select Cryptocurrency</Label>
          <div className="grid grid-cols-3 gap-3">
            {cryptoOptions.map((crypto) => {
              const Icon = crypto.icon;
              return (
                <motion.div
                  key={crypto.id}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedCrypto(crypto.id)}
                  className="cursor-pointer"
                >
                  <Card className={`h-full overflow-hidden border-2 transition-all duration-300 rounded-xl ${
                    selectedCrypto === crypto.id 
                      ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-800' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center space-y-2">
                        <Icon className="h-6 w-6 text-gray-900 dark:text-white" />
                        <span className="text-xs font-semibold text-gray-900 dark:text-white">{crypto.symbol}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700 dark:text-gray-300">Amount:</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {calculateCryptoAmount()} {selectedCrypto.toUpperCase()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 dark:text-gray-300">Equivalent:</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {currency === 'usd' ? `$${amount}` : 
               currency === 'eur' ? `€${amount}` : 
               `IDR ${amount.toLocaleString('en-US')}`}
            </span>
          </div>
        </div>

        <div>
          <Label htmlFor="recipient-address" className="text-gray-900 dark:text-white font-semibold mb-2 block">
            Recipient Wallet Address
          </Label>
          <div className="flex gap-2">
            <Input
              id="recipient-address"
              value={recipientAddress}
              readOnly
              className="font-mono text-sm bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl"
            />
            <Button
              variant="outline"
              onClick={() => handleCopyAddress(recipientAddress)}
              className="border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <QrCode className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">
            Send payment to this address
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-900">
          <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Payment Instructions</h4>
          <ol className="text-sm text-blue-800 dark:text-blue-400 space-y-1 list-decimal list-inside">
            <li>Send exactly {calculateCryptoAmount()} {selectedCrypto.toUpperCase()} to the address above</li>
            <li>Wait for blockchain confirmation (usually 3-6 confirmations)</li>
            <li>Once confirmed, your booking will be automatically processed</li>
            <li>Save your transaction hash for reference</li>
          </ol>
        </div>

        <Button
          onClick={handlePaymentSubmit}
          disabled={isProcessing}
          className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Confirming Payment...
            </>
          ) : (
            'I Have Sent the Payment'
          )}
        </Button>
      </div>
    );
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 rounded-2xl shadow-sm hover:shadow-lg">
      <CardHeader className="p-8 pb-4">
        <CardTitle className="flex items-center space-x-2 text-2xl font-bold text-black dark:text-white" style={{ fontWeight: 800 }}>
          <Bitcoin className="h-6 w-6 text-orange-500" />
          <span>Cryptocurrency Payment</span>
        </CardTitle>
        <CardDescription className="text-gray-700 dark:text-gray-300 text-base">
          Pay with {selectedCrypto === 'bitcoin' ? 'Bitcoin' : 
                   selectedCrypto === 'ethereum' ? 'Ethereum' : 
                   'Tether (USDT)'}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="px-8 pb-8">
        {renderPaymentStatus()}
      </CardContent>
    </Card>
  );
};

export default BitcoinPaymentForm;