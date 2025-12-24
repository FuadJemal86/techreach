import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import TeamSection from './components/TeamSection';
import TeamSectionHeader from './components/TeamSectionHeader';

const App: React.FC = () => {
  return (
    <div className="bg-primary text-white overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Services />
              <Projects />
              <WhyChooseUs />
              <Footer />
              {/* <FloatingContact /> */}
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <TeamSectionHeader />
              <TeamSection />
              <Footer />
              {/* <FloatingContact /> */}
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
