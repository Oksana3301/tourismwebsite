'use client';

import { ReactNode } from 'react';
import Navigation from './navigation';
import Footer from './footer';
import WhatsAppFloatButton from './whatsapp-float-button';

interface PageWrapperProps {
  children: ReactNode;
  hideFooter?: boolean;
}

const PageWrapper = ({ children, hideFooter = false }: PageWrapperProps) => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
      {!hideFooter && <Footer />}
      <WhatsAppFloatButton />
    </>
  );
};

export default PageWrapper;