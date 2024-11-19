
import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Footer } from '../components/../components/Footer';

export const Page = () => {
  return (
    <main className="flex overflow-hidden flex-col pb-36 bg-pink-50 max-md:pb-24">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
};
