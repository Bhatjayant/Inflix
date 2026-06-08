export default function ProductShowcase() {
  const products = [
    { name: "Pharmaceuticals", desc: "Advanced therapeutic formulations." },
    { name: "Nutraceuticals", desc: "Science-backed daily wellness." },
    { name: "Ayurvedic Range", desc: "Traditional wisdom, modern clinical purity." },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Portfolio</h2>
        <p className="text-slate-600 max-w-lg">
          Explore our diverse range of high-quality products developed with precision and care.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="group border border-slate-200 p-8 rounded-3xl hover:border-blue-600 transition-all cursor-pointer">
            <h3 className="text-2xl font-serif mb-3 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-slate-500">{product.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
