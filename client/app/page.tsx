import React from 'react';
//import { Header } from '../components/Header';
import Hero from '@/components/Hero';
//import { Footer } from '../components/Footer';

export default function Page() {
  return (
    <main className="flex overflow-hidden flex-col pb-36 bg-pink-50 max-md:pb-24">
      <Hero />
    </main>
  );
}
