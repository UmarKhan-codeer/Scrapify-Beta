'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen /> : children;
}
