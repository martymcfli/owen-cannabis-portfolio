import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Modern Lifestyle Brand Aesthetic
 * Blog page for sharing insights on networking, brand building, what worked/didn't
 * - Clean, readable layout for long-form content
 * - Easy to add new posts
 * - Tags and categories for filtering
 */

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Word of Mouth Over Ads: How Trail Hazers Built 40+ Wholesale Accounts",
    excerpt:
      "In a market where traditional advertising was impossible, we had to get creative. Here's how direct relationships and word-of-mouth became our most powerful marketing tool.",
    category: "Marketing",
    date: "Coming Soon",
    readTime: 8,
    featured: true,
  },
  {
    id: "2",
    title: "Building Brand Differentiation in a Regulated Market",
    excerpt:
      "When everyone is selling the same product, how do you stand out? It's not about the product — it's about the experience, the relationships, and the trust you build.",
    category: "Brand Strategy",
    date: "Coming Soon",
    readTime: 10,
    featured: true,
  },
  {
    id: "3",
    title: "Bootstrapping to $2.56M: What Worked and What Didn't",
    excerpt:
      "No venture capital. No massive team. Just constraints, creativity, and relentless focus. Here's what I learned about building a profitable business without outside funding.",
    category: "Business",
    date: "Coming Soon",
    readTime: 12,
    featured: true,
  },
  {
    id: "4",
    title: "The Art of Networking: Building Real Relationships in Cannabis",
    excerpt:
      "Networking isn't about collecting business cards. It's about genuine connection, showing up consistently, and being the person others want to work with.",
    category: "Networking",
    date: "Coming Soon",
    readTime: 9,
  },
  {
    id: "5",
    title: "Compliance as Competitive Advantage",
    excerpt:
      "Most people see regulations as obstacles. I saw them as an opportunity to build trust and differentiate. Here's how compliance became our moat.",
    category: "Operations",
    date: "Coming Soon",
    readTime: 7,
  },
  {
    id: "6",
    title: "Systems That Scale: Building Infrastructure for Growth",
    excerpt:
      "The custom booking system we built wasn't fancy, but it solved a real problem and became our biggest driver of retention. Here's how to build systems that actually matter.",
    category: "Operations",
    date: "Coming Soon",
    readTime: 11,
  },
  {
    id: "7",
    title: "When to Hold and When to Fold: Knowing When to Exit",
    excerpt:
      "Building Trail Hazers to $2.56M was an achievement. But recognizing when it was time to sell and executing a clean transition — that's maturity.",
    category: "Business",
    date: "Coming Soon",
    readTime: 8,
  },
  {
    id: "8",
    title: "Lessons from the Cannabis Industry That Apply Everywhere",
    excerpt:
      "The cannabis market taught me things about resilience, relationship-building, and adaptability that apply to any business. Here's what I learned.",
    category: "Insights",
    date: "Coming Soon",
    readTime: 10,
  },
];

const categories = ["All", "Marketing", "Brand Strategy", "Business", "Networking", "Operations", "Insights"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);

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
            <a href="/blog" className="text-sm font-medium text-emerald-600">
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
              Insights & Lessons
            </h1>
            <p className="text-xl text-slate-300">
              Thoughts on networking, brand building, what worked, what didn't, and lessons from building in the cannabis industry.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition group cursor-pointer"
                >
                  <div className="p-8">
                    <div className="flex gap-2 mb-4">
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-600 transition">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                    <button className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-2 group-hover:gap-3 transition">
                      Read Article <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">All Articles</h2>

          {/* Category Filter */}
          <div className="flex gap-3 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="border border-slate-200 rounded-lg p-8 hover:border-emerald-600 hover:shadow-md transition group cursor-pointer"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-600 transition">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-emerald-600 transition flex-shrink-0 mt-1" />
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                No articles in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want to discuss these topics?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in talking about cannabis industry trends, business strategy, and building authentic brands.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg">
            Get in Touch
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
