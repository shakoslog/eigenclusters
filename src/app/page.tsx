import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeContent from '@/components/HomeContent';

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      
      <Suspense fallback={
        <div className="flex items-center justify-center h-full text-white font-mono">
          Loading...
        </div>
      }>
        <HomeContent />
      </Suspense>
      
      <Footer />
    </div>
  );
}