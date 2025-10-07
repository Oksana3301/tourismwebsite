'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { Menu, X, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import CurrencySelector from '@/components/currency-selector';
import { ThemeToggle } from '@/components/theme-toggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  const navigation = [
    { name: 'Destinations', href: '/#destinations' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Stays', href: '/stays' },
    { name: 'Trip Planner', href: '/trip-planner' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 dark:bg-black/98 backdrop-blur-xl shadow-sm border-b border-gray-200 dark:border-gray-800'
          : 'bg-white/90 dark:bg-black/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                <Waves className="h-5 w-5 text-white dark:text-black" />
              </div>
          <span className="text-xl font-bold text-black dark:text-white tracking-tight" style={{ fontWeight: 700 }}>
            SumateraWay
          </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <CurrencySelector />
            <Button
              asChild
              size="lg"
              className="bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 px-6 py-2.5 rounded-full font-semibold shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Link href="/payment">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <CurrencySelector />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-gray-100"
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[400px] bg-white dark:bg-black"
              >
                  <div className="flex flex-col space-y-8 mt-8">
                  <div className="flex items-center gap-3 pb-6 border-b border-gray-200 dark:border-gray-800">
                    <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Waves className="h-5 w-5 text-white dark:text-black" />
                    </div>
                    <span className="text-xl font-bold text-black dark:text-white" style={{ fontWeight: 700 }}>
                      SumatraWay
                    </span>
                  </div>

                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 text-xl font-semibold transition-colors block py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black py-7 rounded-full font-semibold shadow-sm"
                    >
                      <Link href="/payment" onClick={() => setIsOpen(false)}>
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
