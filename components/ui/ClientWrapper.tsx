'use client';

import { useEffect, type ReactNode } from 'react';
import 'aos/dist/aos.css';

// Lazy load AOS only when needed
let AOS: any = null;

export default function ClientWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Dynamic import AOS library for better tree shaking
    import('aos').then((AOSModule) => {
      AOS = AOSModule.default;
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true, // Only animate once
        mirror: false,
        offset: 120,
        delay: 0,
        disable: 'mobile', // Disable AOS on mobile for better performance
      });
    });

    // Cleanup
    return () => {
      if (AOS && AOS.refresh) {
        AOS.refresh();
      }
    };
  }, []);

  return <>{children}</>;
}
