import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Website() {
  return (
    <div className="font-sans antialiased bg-stone-50 text-stone-800 scroll-smooth">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto flex items-center justify-between py-4 px-4">
          <h1 className="text-xl font-bold tracking-wide">PrebioFeed<span className="text-amber-600"> UAE</span></h1>
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li><a href="#products" className="hover:text-amber-600">Products</a></li>
            <li><a href="#science" className="hover:text-amber-600">Science</a></li>
            <li><a href="#sustainability" className="hover:text-amber-600">Sustainability</a></li>
            <li><a href="#contact" className="hover:text-amber-600">Contact</a></li>
          </ul>
          <a href="#contact" className="md:hidden"><Mail className="h-5 w-5" /></a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-amber-200/60 via-orange-100 to-stone-50">
        <img
          src="/hero-camel-desert.jpg"
          alt="Camel silhouette at sunset"
          className="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-multiply opacity-30"
        />
        <div className="container mx-auto px-4 py-24 text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          >
            Feed the <span className="text-amber-600">Fibre</span> of Champions™
          </motion.h2>
          <p className="text-lg md:text-xl mb-8">
            Advanced Gum Arabic prebiotic supplements formulated for racing camels & working herds in the GCC.
          </p>
          <Button asChild size="lg" className="px-8 py-6 text-lg shadow-xl">
            <a href="#products">Explore Products</a>
          </Button>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold mb-8 text-center">Our Formulas</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {/* PrebioPlus Card */}
          <Card className="rounded-2xl shadow-lg hover:shadow-amber-200 transition-shadow">
            <CardHeader className="flex flex-col items-center bg-amber-100 rounded-t-2xl p-6">
              <img src="/product-prebioplus.png" alt="PrebioPlus jar" className="w-32 h-32 object-contain mb-4" />
              <h4 className="text-2xl font-semibold">PrebioPlus™</h4>
              <span className="text-sm tracking-wide text-stone-600">Daily Digestive & Immune Support</span>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed">
                <li>90 % soluble fibre for long‑term gut microbiome balance</li>
                <li>Boosts IgG/IgM & antioxidant enzymes – stronger immunity</li>
                <li>Improves mineral absorption (Ca, Mg) for bone & milk quality</li>
                <li>Viscous matrix supports hydration during desert heat</li>
              </ul>
              <Button asChild variant="secondary" className="w-full">
                <a href="#contact">Request Pricing</a>
              </Button>
            </CardContent>
          </Card>
          {/* PrebioFlex Card */}
          <Card className="rounded-2xl shadow-lg hover:shadow-amber-200 transition-shadow">
            <CardHeader className="flex flex-col items-center bg-yellow-100 rounded-t-2xl p-6">
              <img src="/product-prebioflex.png" alt="PrebioFlex jar" className="w-32 h-32 object-contain mb-4" />
              <h4 className="text-2xl font-semibold">PrebioFlex™</h4>
              <span className="text-sm tracking-wide text-stone-600">Rapid Hydration & Stamina Boost</span>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed">
                <li>Micronised Gum Arabic disperses instantly for quick drench</li>
                <li>15 % higher water‑holding capacity vs. standard GA</li>
                <li>Propionate‑rich fermentation for sustained energy</li>
                <li>Maintains normal motility—supports natural detox</li>
              </ul>
              <Button asChild variant="secondary" className="w-full">
                <a href="#contact">Request Pricing</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="bg-stone-100 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-3xl font-bold mb-6">Science That Delivers</h3>
          <p className="mb-8 text-base md:text-lg leading-relaxed">
            Gum Arabic’s slow‑fermenting soluble fibre nurtures beneficial <em>Bifidobacterium</em> & <em>Lactobacillus</em>,
            improves feed conversion, and boosts systemic antioxidants. Independent trials in hot‑climate livestock
            show stronger immunity, lower gut pH fluctuations, and up to 15 % better hydration uptake.
          </p>
          <Button asChild size="lg" className="px-6 py-5">
            <a href="/PrebioFeed-Vet-Dossier.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" /> Download Vet Dossier
            </a>
          </Button>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold mb-8 text-center">Rooted in Sudanese Heritage</h3>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src="/acacia-harvest.jpg" alt="Acacia gum harvest" className="rounded-2xl shadow-md" />
          <div className="space-y-4 text-base md:text-lg">
            <p>
              We partner directly with gum‑tapping cooperatives across the Sub‑Saharan Savanna, supporting over
              30,000 rural families and re‑greening initiatives that combat desertification.
            </p>
            <p>
              Every purchase of PrebioFeed helps plant new Acacia seedlings and sustain the authentic source of
              the world’s finest Gum Arabic.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-amber-50 py-20">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="mb-6">Request samples, pricing, or technical details – we’ll respond within 24 hours.</p>
          <form className="space-y-4 text-left">
            <input type="text" placeholder="Name" className="w-full p-3 rounded-xl border border-stone-300 focus:ring-amber-600" />
            <input type="email" placeholder="Email" className="w-full p-3 rounded-xl border border-stone-300 focus:ring-amber-600" />
            <textarea placeholder="Message" rows={4} className="w-full p-3 rounded-xl border border-stone-300 focus:ring-amber-600"></textarea>
            <Button className="w-full py-5" type="submit">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-200 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <span>© {new Date().getFullYear()} Canopy Ingredients LLC. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="mailto:info@prebiofeed.com" className="hover:text-amber-400">info@prebiofeed.com</a>
            <span>|</span>
            <span>Dubai • Abu Dhabi • Riyadh</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
