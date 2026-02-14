
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Story from './components/Story';
import Philosophy from './components/Philosophy';
import Reviews from './components/Reviews';
import Credentials from './components/Credentials';
import Footer from './components/Footer';
import TigerBot from './components/TigerBot';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px]">
        <Hero />
        <Profile />
        <Story />
        <Philosophy />
        <Reviews />
        <Credentials />
      </main>
      <Footer />
      <TigerBot />
    </div>
  );
};

export default App;
