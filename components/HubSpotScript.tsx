'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

// Replace with your HubSpot Portal / Hub ID (e.g., '12345678')
const HUB_ID = '45405801';

declare global {
  interface Window {
    _hsq?: unknown[];
  }
}

export default function HubSpotScript() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Track virtual pageviews on Next.js App Router client navigation
  useEffect(() => {
    if (!mounted || !pathname) return;

    window._hsq = window._hsq || [];
    window._hsq.push(['setPath', pathname]);
    window._hsq.push(['trackPageView']);
  }, [mounted, pathname]);

  if (!mounted) return null;

  return (
    <Script
      id="hs-script-loader"
      src={`https://hs-scripts.com{HUB_ID}.js`}
      strategy="afterInteractive"
    />
  );
}