import React from 'react';
import HeroSection from '../components/HeroSection';
import FindMyBMW from '../components/FindMyBMW';
import Motorsport from '../components/Motorsport';
import HommageEdition from '../components/HommageEdition';
import PureDesign from '../components/PureDesign';
import FinancialServices from '../components/FinancialServices';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FindMyBMW />
      <Motorsport />
      <HommageEdition />
      <PureDesign />
      <FinancialServices />
    </>
  );
}
