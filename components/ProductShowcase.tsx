export default function ProductShowcase() {
  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">Pharmaceuticals</div>
          <div className="p-6 bg-white rounded-lg shadow-sm">Nutraceuticals</div>
        </div>
      </div>
    </section>
  );
}
