import { ArrowRight, BookOpen, Users, Briefcase, MessageSquare, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

export default function Home() {
  return (
    <div className="py-8">
      <div className="flex justify-between items-end mb-6 px-2">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-brand-green font-display">ZIM<span className="text-brand-yellow">RUSSIA</span> <span className="text-gray-400">HUB</span></h1>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Official Diaspora Support Network</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
        {/* Hero Section -> Bento Item (Large) */}
        <section className="col-span-1 md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <span className="bg-brand-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">Welcome</span>
            <h2 className="text-5xl font-bold mt-4 leading-[1.1] text-gray-900 tracking-tight font-display">
              Your home away from home in Russia
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              A central hub for Zimbabweans studying and working in Russia. Find verified information, connect with the community, and discover opportunities to grow.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              to="/directory"
              className="rounded-full bg-brand-green hover:bg-opacity-90 px-6 py-3 text-sm font-bold text-white uppercase tracking-wider transition-all flex items-center gap-2"
            >
              Join the Directory <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/resources" className="text-sm font-bold uppercase tracking-wider leading-6 text-gray-900 hover:text-brand-green transition-colors">
              Read the Guide
            </Link>
          </div>
        </section>

        {/* Feature 1: Community Directory */}
        <Link to="/directory" className="bg-gray-900 col-span-1 md:col-span-1 rounded-3xl p-6 text-white flex flex-col justify-between overflow-hidden relative group hover:ring-2 hover:ring-brand-green transition-all">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-1 font-bold flex items-center gap-2">
                <Users className="w-4 h-4" /> Community
              </h3>
              <p className="text-2xl font-bold font-display mt-2 leading-tight">Connect with the diaspora.</p>
            </div>
            <div className="mt-4 flex -space-x-2 relative z-10">
              <div className="w-8 h-8 rounded-full border-2 border-gray-900 bg-brand-red"></div>
              <div className="w-8 h-8 rounded-full border-2 bg-brand-yellow font-bold text-brand-green flex items-center justify-center text-[10px] uppercase border-gray-900">ZR</div>
              <div className="w-8 h-8 rounded-full border-2 border-gray-900 bg-brand-green"></div>
              <div className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-600 flex items-center justify-center text-[10px]">+</div>
            </div>
          </div>
          <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 bg-brand-green opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity"></div>
        </Link>

        {/* Feature 2: Information Hub */}
        <Link to="/resources" className="bg-brand-yellow col-span-1 md:col-span-1 rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-900 opacity-60 mb-1 font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Resources
            </h3>
            <p className="text-xl font-bold leading-tight mt-2 text-gray-900 font-display">Trusted guides on visa processes & living costs.</p>
          </div>
          <div className="bg-gray-900 text-white py-2 px-4 rounded-xl text-center font-bold text-xs mt-4 uppercase tracking-wider">
            Explore Info Hub
          </div>
        </Link>

        {/* Feature 3: Opportunities */}
        <Link to="/opportunities" className="bg-white col-span-1 md:col-span-1 rounded-3xl p-6 border border-gray-200 flex flex-col justify-between hover:border-brand-green transition-colors">
          <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-1 font-bold flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Opportunities
          </h3>
          <p className="text-3xl font-bold mt-2 text-gray-900 leading-tight">Jobs &<br/>Housing</p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <p className="text-[10px] text-gray-400 uppercase font-bold">Discover More</p>
            <ArrowRight className="w-4 h-4 text-brand-green" />
          </div>
        </Link>

        {/* Feature 4: Forum */}
        <Link to="/forum" className="bg-white col-span-1 md:col-span-1 rounded-3xl p-6 border border-gray-200 flex flex-col justify-between hover:border-brand-green transition-colors">
          <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-1 font-bold flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Forum
          </h3>
          <div className="mt-4 flex flex-col gap-2">
            <div className="bg-gray-50 p-3 rounded-2xl">
              <p className="text-xs font-bold text-gray-900 truncate">Sending money to Harare?</p>
              <p className="text-[10px] text-gray-400 mt-1">Join discussion</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-2xl">
              <p className="text-xs font-bold text-gray-900 truncate">Winter clothes recommendations</p>
              <p className="text-[10px] text-gray-400 mt-1">Join discussion</p>
            </div>
          </div>
        </Link>

        {/* Just Arrived Content -> Wide Bento Item */}
        <Link to="/resources" className="col-span-1 md:col-span-2 bg-white border border-gray-200 rounded-3xl p-8 flex flex-col md:flex-row gap-6 justify-between items-center hover:border-gray-300 transition-colors">
          <div className="flex-1">
            <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest mb-1 block">New Arrivals</span>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-display mb-2">
              Just arrived? Start here.
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              We've compiled everything you need to know about setting up your life as a Zimbabwean in Russia. 
            </p>
            <ul className="text-xs text-gray-600 space-y-2 font-medium">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div> First 30 days checklist</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div> Cost of living breakdown</li>
            </ul>
          </div>
          <div className="w-full md:w-32 h-32 bg-gray-100 rounded-2xl border-2 border-white shadow-sm flex items-center justify-center shrink-0">
             <BookOpen className="w-10 h-10 text-brand-green opacity-50" />
          </div>
        </Link>

        {/* CTA -> Hero Support */}
        <Link to="/register" className="bg-brand-red col-span-1 md:col-span-2 rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center cursor-pointer hover:scale-[1.02] transition-transform">
          <p className="text-xs uppercase tracking-widest opacity-80 mb-2 font-bold">Ready to join?</p>
          <p className="text-3xl font-black font-display tracking-tight">CREATE AN ACCOUNT</p>
          <p className="text-xs mt-2 opacity-80 leading-tight">Create your profile to connect with others, ask questions, and access exclusive opportunities.</p>
        </Link>
      </div>
    </div>
  );
}
