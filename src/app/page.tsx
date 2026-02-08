import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PainPoints from '@/components/PainPoints';
import Support from '@/components/Support';
import Specialties from '@/components/Specialties';
import OurOffice from '@/components/OurOffice';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PainPoints />
        <Support />
        <Specialties />
        <OurOffice />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
