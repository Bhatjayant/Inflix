import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inflix Pharma | Precision Wellness',
  description: 'Leading pharmaceutical and nutraceutical solutions for a healthier future.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 font-sans antialiased">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="text-2xl font-serif font-bold tracking-tighter">
              INFLIX PHARMA
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
              <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="/products" className="hover:text-blue-600 transition-colors">Products</a>
              <a href="/science" className="hover:text-blue-600 transition-colors">Science</a>
              <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-slate-50 py-12 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Inflix Pharma Private Limited. All rights reserved.</p>
            <p className="mt-2">Innovation for Healthier Lives.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
