"use client";
import { catConfig } from '@/config/Cat';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';

export default function OnekoCat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Only show oneko on screens >= 640px (Tailwind 'sm')
    const check = () => setShow(window.innerWidth >= 640 && catConfig.enabled);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  if (!show) return null;
  return <Script src="./oneko/oneko.js" data-cat="./oneko/oneko.gif" />;
}