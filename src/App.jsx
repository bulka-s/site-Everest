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
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <>
      <Header />
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
    </>
  );
}
