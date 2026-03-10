import { useState } from "react";
import { Menu, X, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * DESIGN PHILOSOPHY: Modern Lifestyle Brand Aesthetic
 * - Authentic visual storytelling with real commercials, products, and behind-the-scenes content
 * - Lifestyle positioning: Cannabis as part of a broader creative/entrepreneurial identity
 * - Bold typography and dynamic layouts with energy
 * - Integrated multimedia: Video, music, and imagery work seamlessly
 * 
 * KEY DESIGN ELEMENTS:
 * - Diagonal cuts and angled sections (CSS clip-path)
 * - Full-bleed image galleries with text overlays
 * - Split-screen layouts alternating left/right content
 * - Emerald green (#10b981) accent color for premium, natural feel
 * - Animated gradient backgrounds on hero
 * - Custom product showcase cards
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("products");

  const heroImages = {
    trailHazers: "https://private-us-east-1.manuscdn.com/sessionFile/4YLHHLHWz1uTGtDNDR8K9A/sandbox/a93Dotw6KlMGS5PgNJbfTQ-img-1_1771704987000_na1fn_aGVyby10cmFpbC1oYXplcnM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    commercials: "https://private-us-east-1.manuscdn.com/sessionFile/4YLHHLHWz1uTGtDNDR8K9A/sandbox/a93Dotw6KlMGS5PgNJbfTQ-img-2_1771704989000_na1fn_aGVyby1jb21tZXJjaWFscw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    business: "https://private-us-east-1.manuscdn.com/sessionFile/4YLHHLHWz1uTGtDNDR8K9A/sandbox/a93Dotw6KlMGS5PgNJbfTQ-img-3_1771704990000_na1fn_aGVyby1idXNpbmVzcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    music: "https://private-us-east-1.manuscdn.com/sessionFile/4YLHHLHWz1uTGtDNDR8K9A/sandbox/a93Dotw6KlMGS5PgNJbfTQ-img-4_1771704985000_na1fn_aGVyby1tdXNpYw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center h-12">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663042084665/2fRphz9SQ6RwDzimX58H4r/Gemini_Generated_Image_7ib6c97ib6c97ib6_f1ae6505.jpeg"
              alt="McCormick Advisory"
              className="h-full object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#trail-hazers" className="text-sm font-medium hover:text-emerald-600 transition">
              Trail Hazers
            </a>
            <a href="#commercials" className="text-sm font-medium hover:text-emerald-600 transition">
              Commercials
            </a>
            <a href="#music" className="text-sm font-medium hover:text-emerald-600 transition">
              Music
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-emerald-600 transition">
              Experience
            </a>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="#trail-hazers" className="text-sm font-medium">
                Trail Hazers
              </a>
              <a href="#commercials" className="text-sm font-medium">
                Commercials
              </a>
              <a href="#music" className="text-sm font-medium">
                Music
              </a>
              <a href="#experience" className="text-sm font-medium">
                Experience
              </a>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 max-w-md">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663042084665/2fRphz9SQ6RwDzimX58H4r/Gemini_Generated_Image_7ib6c97ib6c97ib6_f1ae6505.jpeg"
                alt="McCormick Advisory"
                className="w-full"
              />
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Entrepreneur, operator, and creative. Built Trail Hazers to $2.56M. Sharing my journey in cannabis, business, and beyond.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg">
                View Portfolio
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trail Hazers Section */}
      <section id="trail-hazers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trail Hazers
                <span className="text-emerald-600 block text-3xl md:text-4xl font-normal mt-2">
                  D.C. Cannabis Lifestyle Brand
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Built and scaled a lifestyle cannabis gifting company from zero to <span className="font-bold text-emerald-600">$2.56M in annual revenue</span> without outside capital in a tightly regulated D.C. market.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>I-71 compliant cannabis gifting model with custom product drops</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>40+ recurring wholesale accounts through direct relationships</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Custom booking system tracking strain preferences and auto-scheduling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Managed delivery team while maintaining quality and cash flow</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Profitable exit: sold to strategic competitor with clean transition</span>
                </li>
              </ul>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6">
                View Case Study
              </Button>
            </div>
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-2xl">
              <img
                src={heroImages.trailHazers}
                alt="Trail Hazers Products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercials Section */}
      <section id="commercials" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Commercials & Media
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl">
              Professional commercials and media production showcasing Trail Hazers brand and cannabis lifestyle content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={heroImages.commercials}
                alt="Commercial Production"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                <Play className="w-16 h-16 text-white fill-white" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Professional Production</h3>
              <p className="text-slate-600 mb-6">
                High-quality commercials and promotional content created for Trail Hazers brand. Showcasing product quality, lifestyle positioning, and creative direction.
              </p>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">→</span>
                  <span>Professional cinematography and lighting</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">→</span>
                  <span>Brand storytelling and lifestyle positioning</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">→</span>
                  <span>Creative direction and product showcase</span>
                </p>
              </div>
              <Button className="mt-8 w-fit bg-emerald-600 hover:bg-emerald-700 text-white">
                View All Commercials
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Merchandise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Products & Merchandise
          </h2>
          <p className="text-xl text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Trail Hazers product line and custom merchandise showcasing brand identity and market positioning.
          </p>

          {/* Tab Navigation */}
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            {["products", "merchandise", "packaging"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium rounded-lg transition ${
                  activeTab === tab
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-slate-50 rounded-lg overflow-hidden hover:shadow-xl transition group cursor-pointer"
              >
                <div className="h-64 bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center group-hover:from-emerald-200 group-hover:to-emerald-100 transition">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">
                      {item}
                    </div>
                    <p className="text-slate-600">Product Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Product {item}</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Premium cannabis product or merchandise item from Trail Hazers collection.
                  </p>
                  <button className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-2">
                    View Details <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-2xl">
              <img
                src={heroImages.music}
                alt="Music Production"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Music & Creative
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Creative work spanning music production and audio content. Showcasing artistic direction and multimedia expertise beyond cannabis business operations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">♪</span>
                  <span>Original music production and audio engineering</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">♪</span>
                  <span>Commercial soundtrack and brand audio identity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">♪</span>
                  <span>Creative direction and artistic vision</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">♪</span>
                  <span>Multimedia integration and storytelling</span>
                </li>
              </ul>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6">
                Listen to Tracks
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What Partners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-emerald-600 text-xl">★</span>
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "Owen's understanding of the cannabis market and ability to build real relationships is unmatched. Trail Hazers was a game-changer."
              </p>
              <p className="font-bold text-slate-900">Partner Name</p>
              <p className="text-slate-600 text-sm">Wholesale Account</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-emerald-600 text-xl">★</span>
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "Working with Owen on operations strategy transformed how we think about scaling. His systems approach is invaluable."
              </p>
              <p className="font-bold text-slate-900">Founder Name</p>
              <p className="text-slate-600 text-sm">Tech Startup</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-emerald-600 text-xl">★</span>
                ))}
              </div>
              <p className="text-slate-700 mb-6">
                "Owen doesn't just understand cannabis — he understands business. His compliance expertise saved us months of headaches."
              </p>
              <p className="font-bold text-slate-900">Compliance Officer</p>
              <p className="text-slate-600 text-sm">Cannabis Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Timeline Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Trail Hazers Growth Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <p className="font-bold text-emerald-600 text-lg">2019</p>
                  <p className="text-slate-600 text-sm">Launch</p>
                </div>
                <div className="flex-1 pt-2 border-l-2 border-emerald-600 pl-6">
                  <p className="font-bold text-slate-900">From Zero</p>
                  <p className="text-slate-600">Started Trail Hazers with zero outside capital, solo founder</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <p className="font-bold text-emerald-600 text-lg">2020-2021</p>
                  <p className="text-slate-600 text-sm">Growth</p>
                </div>
                <div className="flex-1 pt-2 border-l-2 border-emerald-600 pl-6">
                  <p className="font-bold text-slate-900">Wholesale Expansion</p>
                  <p className="text-slate-600">Built 40+ recurring wholesale accounts through direct relationships</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <p className="font-bold text-emerald-600 text-lg">2021-2022</p>
                  <p className="text-slate-600 text-sm">Scale</p>
                </div>
                <div className="flex-1 pt-2 border-l-2 border-emerald-600 pl-6">
                  <p className="font-bold text-slate-900">$2.56M Annual Revenue</p>
                  <p className="text-slate-600">Reached $2.56M in annual revenue with custom booking system and delivery team</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <p className="font-bold text-emerald-600 text-lg">2023</p>
                  <p className="text-slate-600 text-sm">Exit</p>
                </div>
                <div className="flex-1 pt-2 border-l-2 border-emerald-600 pl-6">
                  <p className="font-bold text-slate-900">Strategic Sale</p>
                  <p className="text-slate-600">Sold to strategic competitor with clean transition of accounts and operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Matrix */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-emerald-600">Cannabis Industry</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>I-71 Compliance & Regulations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Product Sourcing & Vendor Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Wholesale Account Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Brand Building & Positioning</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-emerald-600">Operations & Strategy</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Revenue Operations (RevOps)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Systems Design & Implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Cash Flow & Financial Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Team Building & Leadership</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-emerald-600">Business Development</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Relationship Building & Networking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Word-of-Mouth Marketing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Sales Pipeline Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Customer Retention Strategy</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-emerald-600">Tools & Platforms</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>HubSpot CRM & RevOps</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Salesforce Lightning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Google Analytics & GCP</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Zapier, Make, Apollo.io</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Professional Background
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="border-l-4 border-emerald-600 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-2">
                Strategic Operations Consultant
              </h3>
              <p className="text-slate-600 mb-4">2024 – Present | Remote</p>
              <p className="text-slate-700 mb-4">
                Working directly with founders in AI, SaaS, and B2B tech to organize U.S. sales and operations. Setting up outreach systems, defining sales stages, building HubSpot infrastructure, and removing process bottlenecks.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-2">
                Founder, Trail Hazers
              </h3>
              <p className="text-slate-600 mb-4">2019 – 2023 | Washington, D.C.</p>
              <p className="text-slate-700 mb-4">
                Built a lifestyle and retail cannabis gifting company from zero to $2.56M annual revenue without outside capital. Managed all aspects: sourcing, vendor relationships, compliance, inventory, and cash flow. Secured 40+ wholesale accounts through direct relationships. Designed custom booking system for VIP retention. Executed profitable sale to strategic competitor.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-2">
                Operations Professional
              </h3>
              <p className="text-slate-600 mb-4">2017 – 2019</p>
              <p className="text-slate-700 mb-4">
                Managed $2M+ annual service book at Porsche Cars North America. Worked at Utah Olympic Park and AMC Theatres during major events. Handled complex logistics, VIP management, and cross-functional coordination.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-2">
                Education & Certifications
              </h3>
              <p className="text-slate-700 mb-4">
                B.S. Business Management (Cum Laude), Colorado State University Global
              </p>
              <p className="text-slate-700">
                Lean Six Sigma Green Belt • Professional Scrum Master I • HubSpot Revenue Operations • Google Analytics 4 • Salesforce Associate • PMP in progress
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Looking to bring authentic cannabis industry experience to your team. Let's connect.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-6 text-lg font-medium">
              Get in Touch
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              View Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">McCormick Advisory</h3>
              <p className="text-sm">
                Entrepreneur, operations strategist, and advisor. Trail Hazers founder.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#trail-hazers" className="hover:text-white transition">
                    Trail Hazers
                  </a>
                </li>
                <li>
                  <a href="#commercials" className="hover:text-white transition">
                    Commercials
                  </a>
                </li>
                <li>
                  <a href="#music" className="hover:text-white transition">
                    Music
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-white transition">
                    Experience
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:mcmcowen@gmail.com" className="hover:text-white transition">
                    mcmcowen@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+13472681742" className="hover:text-white transition">
                    +1 347 268 1742
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/owen-p-mccormick"
                    className="hover:text-white transition"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Location</h4>
              <p className="text-sm">New York, NY</p>
              <p className="text-sm">Open to Relocation</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>
              © 2026 McCormick Advisory. Cannabis industry portfolio and operations advisory.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
