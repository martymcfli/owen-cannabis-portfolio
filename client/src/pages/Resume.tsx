import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Linkedin } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Modern Lifestyle Brand Aesthetic
 * Resume page - professional, readable, printable
 * - Clean layout optimized for both web and PDF
 * - Easy to scan and understand
 * - Downloadable PDF version
 */

export default function Resume() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center h-12">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663042084665/2fRphz9SQ6RwDzimX58H4r/7F00EFB9-6B22-4354-B6A7-74DEC8F13271_1_105_c-removebg-preview(1)_c667c6e0.png"
              alt="McCormick Advisory"
              className="h-full object-contain"
            />
          </a>
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-sm font-medium hover:text-emerald-600 transition">
              Home
            </a>
            <a href="/about" className="text-sm font-medium hover:text-emerald-600 transition">
              About
            </a>
            <a href="/blog" className="text-sm font-medium hover:text-emerald-600 transition">
              Blog
            </a>
            <a href="/resume" className="text-sm font-medium text-emerald-600">
              Resume
            </a>
            <a href="/showcase" className="text-sm font-medium hover:text-emerald-600 transition">
              Showcase
            </a>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start gap-8">
            <div>
              <div className="max-w-xs mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663042084665/2fRphz9SQ6RwDzimX58H4r/7F00EFB9-6B22-4354-B6A7-74DEC8F13271_1_105_c-removebg-preview(1)_c667c6e0.png"
                  alt="McCormick Advisory"
                  className="w-full"
                />
              </div>
              <p className="text-xl text-slate-300">Entrepreneur & Operations Strategist</p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2">
              <Download size={18} />
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Contact Info */}
          <div className="mb-12 pb-8 border-b border-slate-200">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-emerald-600" />
                <span>New York, NY | Open to Relocation</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-600" />
                <a href="tel:+13472681742" className="hover:text-emerald-600">
                  +1 347 268 1742
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-emerald-600" />
                <a href="mailto:mcmcowen@gmail.com" className="hover:text-emerald-600">
                  mcmcowen@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} className="text-emerald-600" />
                <a href="https://linkedin.com/in/owen-p-mccormick" className="hover:text-emerald-600">
                  linkedin.com/in/owen-p-mccormick
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-emerald-600">Professional Summary</h2>
            <p className="text-slate-700 leading-relaxed">
              Cannabis industry entrepreneur and operations strategist with proven success building and scaling businesses in regulated markets. Founded and grew Trail Hazers to $2.56M annual revenue without outside capital. Expertise in compliance, relationship building, systems design, and strategic operations. Currently advising tech founders on sales and operations strategy.
            </p>
          </section>

          {/* Professional Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-emerald-600">Professional Experience</h2>

            <div className="space-y-8">
              {/* Current Role */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">Strategic Operations Consultant</h3>
                    <p className="text-slate-600">Remote</p>
                  </div>
                  <span className="text-slate-600 font-medium">2024 – Present</span>
                </div>
                <ul className="space-y-2 text-slate-700 ml-4">
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      Worked directly with founders in AI, SaaS, and B2B tech to organize U.S. sales and operations. Set up outreach systems, defined sales stages, built HubSpot infrastructure, and removed process bottlenecks.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      Helped teams simplify workflows, clarify ownership, and remove bottlenecks slowing growth.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Trail Hazers */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">Founder, Trail Hazers</h3>
                    <p className="text-slate-600">Lifestyle & Regulated Retail Brand | Washington, D.C.</p>
                  </div>
                  <span className="text-slate-600 font-medium">2019 – 2023</span>
                </div>
                <ul className="space-y-2 text-slate-700 ml-4">
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      Built I-71 compliant cannabis gifting company from zero to $2.56M annual revenue without outside capital. Operated as solo founder for two years, managing sourcing, vendor relationships, pricing, compliance, inventory, and cash flow.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      Launched custom product drops and tested promotional bundles in gray market. Built strong repeat business through word-of-mouth and customer preference tracking.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      Secured 40+ recurring wholesale accounts by cold-walking into brick-and-mortar shops and building direct relationships. No distributor — displaced existing suppliers through consistent delivery.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      Designed custom booking system tracking client strain preferences and auto-scheduling recurring orders — became biggest driver of VIP retention. Hired and managed delivery team while maintaining quality and cash flow.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      Negotiated and closed profitable sale to strategic competitor, executing clean transition of wholesale accounts and operations.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Operations Experience */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">Operations Professional</h3>
                  </div>
                  <span className="text-slate-600 font-medium">2017 – 2019</span>
                </div>
                <ul className="space-y-2 text-slate-700 ml-4">
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      Managed $2M+ annual service book at Porsche Cars North America, working directly with high-net-worth clients. Handled complex service issues, clear communication, and long-term relationship management.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      Worked at Utah Olympic Park and AMC Theatres during major events (Olympic qualifiers, Sundance Film Festival). Managed staff assignments, crowd flow, and VIP logistics while coordinating with security and technical teams.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Real Estate */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">Real Estate Project Support</h3>
                    <p className="text-slate-600">The Lifshutz Companies</p>
                  </div>
                  <span className="text-slate-600 font-medium">2015 – 2017</span>
                </div>
                <ul className="space-y-2 text-slate-700 ml-4">
                  <li className="flex gap-3">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>
                      Supported multiple development projects including Camp Hot Wells redevelopment in San Antonio. Tracked permits, managed documentation, followed up with vendors, and monitored site progress.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-emerald-600">Education</h2>
            <div>
              <h3 className="text-lg font-bold">B.S. Business Management (Cum Laude)</h3>
              <p className="text-slate-600">Colorado State University Global</p>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-emerald-600">Certifications & Credentials</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Lean Six Sigma Green Belt (CSSC)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Professional Scrum Master I (PSM I)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>HubSpot Revenue Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Google Analytics 4</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Salesforce Associate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>PMP in progress (exam 2026)</span>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-emerald-600">Technical Skills & Tools</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2">CRM & Operations</h3>
                <p className="text-slate-700">HubSpot (CRM Architecture & RevOps), Salesforce (Lightning)</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Project Management</h3>
                <p className="text-slate-700">Jira, Asana</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Analytics & Data</h3>
                <p className="text-slate-700">Google Cloud Platform, Google Analytics 4</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Automation & Integration</h3>
                <p className="text-slate-700">Apollo.io, Zapier, Make</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Expertise</h3>
                <p className="text-slate-700">Deal Pipeline Design, UAT, Revenue Operations</p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className="mb-12 pb-8 border-b border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-emerald-600">Languages</h2>
            <div className="space-y-2">
              <p className="text-slate-700">
                <span className="font-bold">English</span> — Native
              </p>
              <p className="text-slate-700">
                <span className="font-bold">French</span> — DELF B2
              </p>
            </div>
          </section>

          {/* Download Section */}
          <div className="text-center py-8">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg flex items-center gap-2 mx-auto">
              <Download size={20} />
              Download Full Resume (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Owen P. McCormick. Cannabis industry professional.</p>
        </div>
      </footer>
    </div>
  );
}
