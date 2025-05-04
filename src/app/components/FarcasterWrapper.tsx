'use client';

import { useEffect } from 'react';
import { sdk } from '@farcaster/frame-sdk';

export default function FarcasterWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize the SDK
    const init = async () => {
      try {
        // Hide the splash screen when your app is ready
        await sdk.actions.ready();
      } catch (error) {
        console.error('Error initializing Farcaster SDK:', error);
      }
    };

    init();
  }, []);

  return <>{children}</>;
} 