export default function ScienceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Rooted in Clinical Integrity</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            At Inflix Pharma, we bridge the gap between ancient therapeutic wisdom 
            and modern clinical precision. Every formulation undergoes rigorous 
            testing to ensure the highest standards of safety and efficacy.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              Standardized Extract Analysis
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              GMP Compliant Facilities
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              Evidence-Based Formulation
            </li>
          </ul>
        </div>
        <div className="bg-slate-100 h-96 rounded-3xl flex items-center justify-center border border-slate-200">
          <p className="text-slate-400 italic">Scientific Documentation Portal</p>
        </div>
      </div>
    </section>
  );
}
