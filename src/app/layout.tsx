import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inflix Pharma | Precision Wellness',
  description: 'Leading pharmaceutical and nutraceutical development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900">
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="text-xl font-bold tracking-tighter">INFLIX PHARMA</div>
            <div className="hidden md:flex gap-8 text-sm font-medium">
              {['Portfolio', 'Research', 'Compliance', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
