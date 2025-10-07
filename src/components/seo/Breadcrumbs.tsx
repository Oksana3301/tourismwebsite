'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbSchema } from './structured-data';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Always include home as first item
  const breadcrumbItems = [
    { name: 'Home', url: 'https://sumateraway.com' },
    ...items,
  ];

  return (
    <>
      {/* Breadcrumb Schema for SEO */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Visual Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center space-x-2 text-sm text-muted-foreground mb-6"
      >
        <Link
          href="/"
          className="hover:text-foreground transition-colors flex items-center"
        >
          <Home className="h-4 w-4" />
          <span className="sr-only">Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={item.url} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4" />
              {isLast ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </>
  );
}

