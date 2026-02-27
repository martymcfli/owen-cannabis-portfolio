import { Button } from "@/components/ui/button";
import { Heart, Target, Lightbulb, Users } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Modern Lifestyle Brand Aesthetic
 * About/Bio page showcasing Owen's personal story, philosophy, and approach to business
 * - Authentic storytelling with personal narrative
 * - Values and principles clearly communicated
 * - Personal photos and genuine connection
 */

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-slate-900">Owen</span>
            <span className="text-emerald-600 ml-1">McCormick</span>
          </a>
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-sm font-medium hover:text-emerald-600 transition">
              Home
            </a>
            <a href="/about" className="text-sm font-medium text-emerald-600">
              About
            </a>
            <a href="/blog" className="text-sm font-medium hover:text-emerald-600 transition">
              Blog
            </a>
            <a href="/resume" className="text-sm font-medium hover:text-emerald-600 transition">
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Real Story
            </h1>
            <p className="text-xl text-slate-300">
              From building Trail Hazers to $2.56M in revenue, to creating music and commercials, to advising tech founders — here's what shaped my approach to business, brand, and life.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Who I Am
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                I'm an entrepreneur, operations strategist, and creative who believes in building real, authentic businesses. I don't believe in shortcuts or hype — I believe in understanding your market, building genuine relationships, and creating value that people actually want.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                My journey started in operations at high-end automotive and events. But it was building Trail Hazers in one of the most regulated cannabis markets in the country that taught me everything about resilience, compliance, relationship-building, and scaling without capital.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Today, I work with founders in tech, advise on operations and sales strategy, and continue exploring creative ventures. But cannabis will always be part of my story — it's where I learned to build something real.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden h-96">
              <img src="/owen-cannabis-portfolio/owen-profile.png" alt="Owen McCormick" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What I Believe In
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Authenticity Over Hype</h3>
                  <p className="text-slate-600">
                    Real relationships and genuine value beat marketing fluff every time. People can tell when you actually care about what you're building.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Systems Over Chaos</h3>
                  <p className="text-slate-600">
                    Good operations and clear processes allow creativity to thrive. Chaos is just poor planning dressed up as hustle.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
                  <p className="text-slate-600">
                    Every market, every business, every person teaches you something. Stay curious. Stay humble. Stay willing to be wrong.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-3">Relationships First</h3>
                  <p className="text-slate-600">
                    Your network is your net worth. Invest in people. Be reliable. Show up. Remember that business is ultimately about human connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trail Hazers Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Building Trail Hazers: Lessons in Constraint
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl">
            Trail Hazers wasn't built with venture capital or a massive team. It was built with constraints, creativity, and relentless focus on customer relationships.
          </p>

          <div className="space-y-8 max-w-3xl">
            <div className="border-l-4 border-emerald-600 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-3">No Outside Capital = Focus</h3>
              <p className="text-slate-700">
                When you're bootstrapping, every dollar matters. You can't afford to waste money on things that don't directly drive revenue. This forced us to be incredibly intentional about every decision.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-3">Compliance is Competitive Advantage</h3>
              <p className="text-slate-700">
                In a regulated market like D.C., compliance isn't a burden — it's your moat. We didn't cut corners. We built relationships with compliance experts, understood the rules better than competitors, and that became a differentiator.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-3">Direct Relationships Scale Better Than Ads</h3>
              <p className="text-slate-700">
                We couldn't run traditional advertising. So we walked into shops, built relationships, proved our product quality, and let word-of-mouth do the work. 40+ wholesale accounts came from direct relationships, not marketing spend.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-3">Systems Enable Growth</h3>
              <p className="text-slate-700">
                The custom booking system we built wasn't fancy, but it solved a real problem: tracking customer preferences and automating repeat orders. That system became our biggest driver of VIP retention and recurring revenue.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-8 py-4">
              <h3 className="text-2xl font-bold mb-3">Know When to Exit</h3>
              <p className="text-slate-700">
                Building to $2.56M was an achievement. But recognizing when it was time to sell to a strategic competitor and executing a clean transition — that's maturity. Not every business is meant to be forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Beyond Business
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                <p className="text-slate-600">Photo Placeholder</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Music & Production</h3>
                <p className="text-slate-600">
                  Creating music and audio content. Exploring production, sound design, and storytelling through sound.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                <p className="text-slate-600">Photo Placeholder</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Creative Direction</h3>
                <p className="text-slate-600">
                  Photography, videography, and visual storytelling. Understanding how to communicate through imagery.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                <p className="text-slate-600">Photo Placeholder</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Travel & Culture</h3>
                <p className="text-slate-600">
                  Exploring different markets, cultures, and business ecosystems. Learning from how different regions operate.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Interests & Hobbies</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-emerald-600 font-bold">→</span>
                <span>Music production and audio engineering</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-600 font-bold">→</span>
                <span>Photography and visual storytelling</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-600 font-bold">→</span>
                <span>Exploring new markets and business ecosystems</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-600 font-bold">→</span>
                <span>Mentoring early-stage founders</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-600 font-bold">→</span>
                <span>Understanding cannabis industry trends and regulations</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-emerald-600 font-bold">→</span>
                <span>Building systems and processes that scale</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Connect With Me
          </h2>
          <div className="flex gap-4 justify-center flex-wrap max-w-2xl mx-auto">
            <Button variant="outline" className="px-6 py-3">
              LinkedIn
            </Button>
            <Button variant="outline" className="px-6 py-3">
              Email
            </Button>
            <Button variant="outline" className="px-6 py-3">
              Instagram
            </Button>
            <Button variant="outline" className="px-6 py-3">
              Twitter
            </Button>
            <Button variant="outline" className="px-6 py-3">
              Spotify
            </Button>
            <Button variant="outline" className="px-6 py-3">
              SoundCloud
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
