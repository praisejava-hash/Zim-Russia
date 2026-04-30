import { FileText, ChevronRight, BookOpen, Clock, ShieldCheck, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'getting-started', name: 'Getting Started', icon: <Map className="w-5 h-5" />, count: 12 },
  { id: 'visa-legal', name: 'Visa & Legal', icon: <ShieldCheck className="w-5 h-5" />, count: 8 },
  { id: 'academics', name: 'Academics', icon: <BookOpen className="w-5 h-5" />, count: 15 },
  { id: 'daily-life', name: 'Daily Life', icon: <Clock className="w-5 h-5" />, count: 24 },
];

const articles = [
  {
    id: 1,
    title: 'Surviving your first 30 days in Russia: A Checklist',
    category: 'Getting Started',
    preview: 'From getting a sim card to registering your visa, here are the non-negotiable steps you need to take when you land.',
    readTime: '8 min read',
    date: 'Oct 12, 2023',
    featured: true
  },
  {
    id: 2,
    title: 'Cost of living breakdown: Moscow vs Regional Cities',
    category: 'Daily Life',
    preview: 'A detailed look at groceries, transport, housing, and entertainment costs across different Russian cities.',
    readTime: '6 min read',
    date: 'Nov 05, 2023',
    featured: false
  },
  {
    id: 3,
    title: 'How to extend your student visa without stress',
    category: 'Visa & Legal',
    preview: 'The step-by-step process, documents needed, and timeline for renewing your student visa before it expires.',
    readTime: '5 min read',
    date: 'Jan 18, 2024',
    featured: false
  },
  {
    id: 4,
    title: 'Finding English-speaking part-time jobs',
    category: 'Daily Life',
    preview: 'Legalities of working as a student and where to look for tutoring and translation gigs.',
    readTime: '10 min read',
    date: 'Feb 02, 2024',
    featured: false
  }
];

export default function Resources() {
  return (
    <div className="py-8 space-y-12">
      <div className="bg-brand-green rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold tracking-tight text-white font-display sm:text-5xl">Information Hub</h1>
          <p className="mt-4 text-lg text-emerald-100 max-w-2xl font-medium">
            Trusted guides and resources created by the community, for the community. No rumors, just facts.
          </p>
          <div className="mt-8 flex max-w-md gap-x-4">
            <input
              name="search"
              type="text"
              required
              className="min-w-0 flex-auto rounded-full border-0 bg-white/10 px-6 py-3 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-emerald-200 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Search guides, articles, tutorials..."
            />
            <button
              type="submit"
              className="flex-none rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-green shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <h3 className="font-display font-bold uppercase tracking-widest text-xs text-gray-900 border-b border-gray-200 pb-3">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group">
                  <div className="flex items-center gap-3 text-gray-700 group-hover:text-brand-green transition-colors">
                    <div className="p-2 rounded-lg bg-brand-green/10 text-brand-green">
                      {category.icon}
                    </div>
                    <span className="font-bold text-sm tracking-tight">{category.name}</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-500 py-1 px-2 rounded-full font-bold">
                    {category.count}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <h3 className="font-display font-bold uppercase tracking-widest text-xs text-gray-900 border-b border-gray-200 pb-3">Latest Guides</h3>
          <div className="grid grid-cols-1 gap-6">
            {articles.map((article) => (
              <article key={article.id} className={`relative isolate flex pl-0 md:pl-0 flex-col md:flex-row gap-6 p-6 rounded-2xl border ${article.featured ? 'border-brand-green/30 bg-brand-green/5' : 'border-gray-200 bg-white'} transition-all hover:shadow-md hover:border-brand-green`}>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                    <span className="text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                    <span className="text-gray-400 hidden sm:block">&bull; {article.date}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-xl font-bold font-display text-gray-900 group-hover:text-brand-green transition-colors">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {article.title}
                      </a>
                    </h3>
                    <p className="mt-3 text-gray-600 font-medium text-sm leading-relaxed max-w-3xl">
                      {article.preview}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-brand-green hover:text-brand-yellow font-bold uppercase tracking-widest text-[10px] pt-4 border-t border-gray-100 mt-4 transition-colors">
                    Read guide <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
              View All Guides
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
