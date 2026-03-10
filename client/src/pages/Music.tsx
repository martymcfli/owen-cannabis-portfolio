import { Button } from "@/components/ui/button";
import { Music as MusicIcon, Headphones } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Modern Lifestyle Brand Aesthetic
 * Music page showcasing Owen's creative work and SoundCloud profile
 * - Full SoundCloud profile embedded for seamless listening
 * - Professional presentation of music as part of creative identity
 * - Clean, minimal design focused on the music
 */

export default function Music() {
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
            <a href="/music" className="text-sm font-medium text-emerald-600">
              Music
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

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm">
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
              <MusicIcon className="w-10 h-10 text-emerald-400" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Music & Sound
              </h1>
            </div>
            <p className="text-xl text-slate-300">
              Creative exploration through music production, sound design, and audio storytelling. Listen to my latest tracks and projects.
            </p>
          </div>
        </div>
      </section>

      {/* SoundCloud Embed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Headphones className="w-8 h-8 text-emerald-600" />
                My SoundCloud Profile
              </h2>
              <p className="text-lg text-slate-600">
                Stream all my tracks, remixes, and audio projects. Follow for new releases and production updates.
              </p>
            </div>

            {/* SoundCloud Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-slate-50 p-8">
              <iframe
                width="100%"
                height="600"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/736174929&color=%2310b981&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                style={{ display: 'block' }}
              />
              <div style={{ fontSize: "12px", color: "#cccccc", overflow: "hidden" } as React.CSSProperties}>
                <a href="https://soundcloud.com/zen0-736174929" title="zen0" target="_blank" rel="noopener noreferrer" style={{ color: "#cccccc", textDecoration: "none" }}>
                  zen0
                </a>
                · Sound Cloud
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Music Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              Music as Creative Expression
            </h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Music production is where I explore creative ideas beyond business. It's a space to experiment with sound, collaborate with other artists, and express perspectives that don't fit into traditional formats.
              </p>
              <p>
                My work spans production, sound design, and audio storytelling. Each track is an exploration of mood, texture, and narrative — applying the same intentionality I bring to business into the sonic realm.
              </p>
              <p>
                Whether it's ambient soundscapes, electronic production, or experimental audio, the goal is always the same: create something that resonates, moves, and makes people think differently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Interested in Collaboration?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Open to music production projects, sound design work, and creative collaborations. Let's create something interesting together.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg">
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">McCormick Advisory</h3>
              <p className="text-sm">
                Entrepreneur, operations strategist, and creative. Trail Hazers founder.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-emerald-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-emerald-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-emerald-400 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/music" className="hover:text-emerald-400 transition">
                    Music
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/resume" className="hover:text-emerald-400 transition">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="/showcase" className="hover:text-emerald-400 transition">
                    Showcase
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm">
                <a href="mailto:contact@mccormickadvisory.co" className="hover:text-emerald-400 transition">
                  contact@mccormickadvisory.co
                </a>
              </p>
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
