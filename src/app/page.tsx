'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif text-slate-950 mb-6">
            Advancing Global <br /> Health Standards.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mb-10 mx-auto">
            Inflix Pharma delivers precision-engineered pharmaceutical solutions 
            rooted in clinical integrity and innovative scientific research.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Our Products
            </button>
            <button className="bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-200 transition-colors">
              Corporate Vision
            </button>
          </div>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { title: "Clinical Rigor", desc: "Every solution is backed by exhaustive research and testing." },
            { title: "Global Compliance", desc: "Adhering to the highest international pharmaceutical standards." },
            { title: "Human Focus", desc: "Our innovation is driven by the goal of improving patient outcomes." }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
            >
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
