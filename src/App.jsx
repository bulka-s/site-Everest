import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { HowItWorks } from "./components/HowItWorks";
import { Benefits } from "./components/Benefits";
import { Courses } from "./components/Courses";
import { Certificate } from "./components/Certificate";
import { Guarantees } from "./components/Guarantees";
import { FAQ } from "./components/FAQ";
import { RegistrationForm } from "./components/RegistrationForm";
import { RegistrationPop } from "./components/RegistrationPop";
import { AuthPop } from "./components/AuthPop";
import { Footer } from "./components/Footer";

export default function Page() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <Header
        onRegisterClick={() => setIsRegistrationOpen(true)}
        onLoginClick={() => setIsAuthOpen(true)}
      />
      <div className="cont">
        <Hero />
        <About />
        <HowItWorks />
        <Benefits />
        <Courses />
        <Certificate />
        <Guarantees />
        <FAQ />
        <RegistrationForm />
      </div>
      <Footer />

      <RegistrationPop
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <AuthPop isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
