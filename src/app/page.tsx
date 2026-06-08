'use client';
import ProductShowcase from '../components/ProductShowcase';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-serif text-slate-950 mb-6">
          Advancing Global <br /> Health Standards.
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mb-10 mx-auto">
          Inflix Pharma delivers precision-engineered pharmaceutical solutions 
          rooted in clinical integrity and innovative scientific research.
        </p>
      </section>

      {/* Product Section */}
      <ProductShowcase />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
