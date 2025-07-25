import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19]">
      <Hero />
      <main className="flex-grow">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
