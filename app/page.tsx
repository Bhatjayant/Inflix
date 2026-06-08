import ContactSection from '../components/ContactSection';
import ProductShowcase from '../components/ProductShowcase';

export default function Home() {
  return (
    <main>
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-7xl font-serif mb-6">Inflix Pharma</h1>
        <p className="text-xl text-slate-600">Innovation for Healthier Lives.</p>
      </section>
      <ProductShowcase />
      <ContactSection />
    </main>
  );
}
