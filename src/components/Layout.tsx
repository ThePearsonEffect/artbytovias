
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${className || ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
