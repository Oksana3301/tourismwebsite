"use client";

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { CurrencyProvider } from '@/contexts/currency-context';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000, // 1 minute
          refetchOnWindowFocus: false,
          retry: (failureCount: number, error: any) => {
            // Don't retry for 4xx errors
            if (error instanceof Error && error.message.includes('4')) {
              return false;
            }
            // Retry up to 3 times
            return failureCount < 3;
          },
        },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <CurrencyProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#fff',
                },
              },
            }}
          />
          <ReactQueryDevtools initialIsOpen={false} />
        </CurrencyProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  );
}