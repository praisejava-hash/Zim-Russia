import { MessageSquare, ThumbsUp, MoreHorizontal, User } from 'lucide-react';

const threads = [
  {
    id: 1,
    title: 'Best ways to send money back home?',
    author: 'Tatenda M.',
    time: '2 hours ago',
    replies: 14,
    likes: 8,
    category: 'Finance',
    excerpt: 'Has anyone found a reliable way to send money back to Zim recently? The usual apps seem to be having issues with Russian cards.'
  },
  {
    id: 2,
    title: 'Looking for a study group - KFU Medical Students',
    author: 'Rudo N.',
    time: '5 hours ago',
    replies: 3,
    likes: 2,
    category: 'Academics',
    excerpt: 'Hi everyone, I\'m looking to form a study group for 2nd-year med students at KFU. Planning to meet near the main campus library.'
  },
  {
    id: 3,
    title: 'Winter clothes recommendations? Budget friendly!',
    author: 'Farai G.',
    time: '1 day ago',
    replies: 28,
    likes: 15,
    category: 'Daily Life',
    excerpt: 'First winter here and I am freezing. Where do you guys buy good quality winter coats that won\'t break the bank? Looking in Moscow.'
  },
  {
    id: 4,
    title: 'Translating degree certificates - Recommendations needed',
    author: 'Chipo S.',
    time: '2 days ago',
    replies: 5,
    likes: 4,
    category: 'Legal',
    excerpt: 'I need to get my Zim degree certificate translated to Russian and notarized for a job application. Any trusted translation agencies?'
  }
];

export default function Forum() {
  return (
    <div className="py-8 flex flex-col lg:flex-row gap-8">
      {/* Main Forum Content */}
      <div className="flex-1 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 font-display sm:text-4xl">Discussion Forum</h1>
          <button className="whitespace-nowrap rounded-full bg-brand-green px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-sm hover:bg-opacity-90 transition-colors">
            Start a Discussion
          </button>
        </div>

        <div className="flex gap-2 pb-2 overflow-x-auto no-scrollbar border-b border-gray-200">
          {['Latest', 'Top', 'Unanswered', 'My Posts'].map((tab, i) => (
            <button 
              key={tab}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors border-b-2 ${
                i === 0 
                  ? 'border-brand-green text-brand-green' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {threads.map((thread) => (
            <div key={thread.id} className="bg-white p-6 rounded-3xl border border-gray-200 hover:border-brand-green transition-all shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-[10px] uppercase font-bold tracking-widest text-gray-600">
                      {thread.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1">
                      <User className="w-3 h-3" /> {thread.author} <span className="mx-1">&bull;</span> {thread.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-display hover:text-brand-green transition-colors">
                    <a href="#">{thread.title}</a>
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gray-600 line-clamp-2">
                    {thread.excerpt}
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 shrink-0">
                  <span className="sr-only">Options</span>
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-400 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-1.5 hover:text-brand-green cursor-pointer transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span>{thread.replies} replies</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-brand-green cursor-pointer transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{thread.likes} likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
            Load More
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:w-80 space-y-8">
        <div className="bg-brand-green/5 p-6 md:p-8 rounded-3xl border border-brand-green/10">
          <h3 className="font-display font-bold uppercase tracking-widest text-xs text-brand-green mb-4 border-b border-brand-green/10 pb-3">Forum Guidelines</h3>
          <ul className="text-sm font-medium text-gray-600 space-y-3">
            <li className="flex gap-2"><span className="text-brand-green font-bold">&bull;</span> Be respectful and courteous.</li>
            <li className="flex gap-2"><span className="text-brand-green font-bold">&bull;</span> Search before creating a new thread.</li>
            <li className="flex gap-2"><span className="text-brand-green font-bold">&bull;</span> No spam or unauthorized promotions.</li>
            <li className="flex gap-2"><span className="text-brand-green font-bold">&bull;</span> Protect your privacy (don't share sensitive PII).</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm">
          <h3 className="font-display font-bold uppercase tracking-widest text-xs text-gray-900 mb-4 border-b border-gray-100 pb-3">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {['#visas', '#money', '#moscow', '#finding-jobs', '#winter', '#kfu', '#food'].map(tag => (
              <a key={tag} href="#" className="inline-flex items-center rounded-lg bg-gray-50 px-2.5 py-1.5 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-200 hover:bg-gray-100 transition-colors">
                {tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
