import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Modern Lifestyle Brand Aesthetic
 * Showcase page for commercials, adverts, and media content
 * - Full-bleed image galleries
 * - Video player placeholders
 * - Easy to add content later
 */

interface MediaItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail?: string;
  videoUrl?: string;
  type: "video" | "image";
}

const mediaItems: MediaItem[] = [
  {
    id: "1",
    title: "Trail Hazers Brand Commercial",
    category: "Commercial",
    description:
      "Professional commercial showcasing Trail Hazers brand identity and product quality.",
    type: "video",
  },
  {
    id: "2",
    title: "Product Showcase Reel",
    category: "Commercial",
    description:
      "High-quality product photography and showcase reel featuring Trail Hazers product line.",
    type: "video",
  },
  {
    id: "3",
    title: "Behind-the-Scenes Production",
    category: "Documentary",
    description:
      "Behind-the-scenes look at Trail Hazers operations and product development.",
    type: "video",
  },
  {
    id: "4",
    title: "Brand Campaign #1",
    category: "Campaign",
    description: "Promotional campaign featuring Trail Hazers brand messaging and lifestyle positioning.",
    type: "video",
  },
  {
    id: "5",
    title: "Product Photography Series",
    category: "Photography",
    description: "Professional product photography showcasing Trail Hazers product line.",
    type: "image",
  },
  {
    id: "6",
    title: "Lifestyle Content",
    category: "Photography",
    description: "Lifestyle photography and brand imagery from Trail Hazers era.",
    type: "image",
  },
  {
    id: "7",
    title: "Commercial Spot #2",
    category: "Commercial",
    description: "Additional commercial content featuring Trail Hazers products and brand.",
    type: "video",
  },
  {
    id: "8",
    title: "Brand Documentary",
    category: "Documentary",
    description: "Longer-form documentary content about Trail Hazers journey and impact.",
    type: "video",
  },
];

const categories = ["All", "Commercial", "Campaign", "Documentary", "Photography"];

export default function Showcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredMedia =
    selectedCategory === "All"
      ? mediaItems
      : mediaItems.filter((item) => item.category === selectedCategory);

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
            <a href="/resume" className="text-sm font-medium hover:text-emerald-600 transition">
              Resume
            </a>
            <a href="/showcase" className="text-sm font-medium text-emerald-600">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Commercials & Media</h1>
            <p className="text-xl text-slate-600">
              Professional commercials and media production from Trail Hazers and creative projects.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-slate-50 border-b border-slate-200 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-emerald-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((media) => (
              <div
                key={media.id}
                onClick={() => setSelectedMedia(media)}
                className="group cursor-pointer"
              >
                {/* Video Placeholder */}
                {media.type === "video" && (
                  <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden mb-4 group-hover:shadow-xl transition">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white fill-white opacity-80 group-hover:opacity-100 transition" />
                    </div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
                  </div>
                )}

                {/* Image Placeholder */}
                {media.type === "image" && (
                  <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg overflow-hidden mb-4 group-hover:shadow-xl transition flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-slate-600 font-medium">Photo Placeholder</p>
                      <p className="text-sm text-slate-500">Image content</p>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {media.category}
                    </span>
                    {media.type === "video" && (
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                        Video
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition">
                    {media.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {media.description}
                  </p>
                  <button className="text-emerald-600 font-medium text-sm hover:text-emerald-700 flex items-center gap-2">
                    {media.type === "video" ? "Watch" : "View"} <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredMedia.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                No media in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Media Detail Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Player Placeholder */}
            {selectedMedia.type === "video" && (
              <div className="w-full h-96 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                <Play className="w-20 h-20 text-white fill-white opacity-80" />
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setSelectedMedia(null)}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

            {/* Image Placeholder */}
            {selectedMedia.type === "image" && (
              <div className="w-full h-96 bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center relative">
                <div className="text-center">
                  <p className="text-slate-600 font-medium">Photo Placeholder</p>
                  <p className="text-sm text-slate-500">Full-size image</p>
                </div>
                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => setSelectedMedia(null)}
                    className="bg-white/20 hover:bg-white/30 text-slate-700 rounded-full p-2 transition"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                  {selectedMedia.category}
                </span>
                {selectedMedia.type === "video" && (
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                    Video
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-bold mb-4">
                {selectedMedia.title}
              </h2>
              <p className="text-slate-700 text-lg mb-6">
                {selectedMedia.description}
              </p>
              <div className="flex gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6">
                  {selectedMedia.type === "video" ? "Watch Full Video" : "View Full Image"}
                </Button>
                <Button variant="outline" className="px-8 py-6">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upload Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            More Content Coming Soon
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Additional commercials, adverts, and media content will be added as they're produced. Check back soon for more.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg">
            Get Notified
          </Button>
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
