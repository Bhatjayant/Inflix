export default function ContactSection() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Partner With Us</h2>
        <p className="text-slate-400 mb-12 text-lg">
          For corporate inquiries, distribution opportunities, or clinical research 
          collaboration, please reach out to our professional team.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="p-8 bg-slate-800 rounded-2xl">
            <h4 className="font-bold mb-2">Corporate Office</h4>
            <p className="text-slate-400 text-sm">Navi Mumbai, Maharashtra, India</p>
          </div>
          <div className="p-8 bg-slate-800 rounded-2xl">
            <h4 className="font-bold mb-2">General Inquiries</h4>
            <p className="text-slate-400 text-sm">info@inflixpharma.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
