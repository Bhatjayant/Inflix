'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
            Advancing Human Wellness
          </span>
          <h1 className="text-5xl md:text-7xl mt-6 mb-8 leading-[1.1]">
            Precision Science, <br />
            <span className="italic text-slate-500">Uncompromised Quality.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            Inflix Pharma integrates traditional wisdom with modern clinical research to deliver high-efficacy nutraceuticals and therapeutics.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-all">
              Explore Research
            </button>
            <button className="border border-slate-200 px-8 py-3 rounded-full hover:bg-slate-50 transition-all">
              Corporate Inquiry
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
