import { Briefcase, Building2, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const opportunities = [
  {
    id: 1,
    title: 'English Language Tutor',
    organization: 'Skyeng',
    type: 'Part-time',
    location: 'Remote',
    category: 'Job',
    posted: '2 days ago',
    description: 'Looking for native or near-native English speakers to teach conversational English online to corporate clients.'
  },
  {
    id: 2,
    title: 'Software Engineering Summer Internship',
    organization: 'Yandex',
    type: 'Internship',
    location: 'Moscow',
    category: 'Internship',
    posted: '1 week ago',
    description: '3-month paid summer internship for computer science students. Basic Russian required.'
  },
  {
    id: 3,
    title: 'Shared Apartment Available',
    organization: 'Zim Student Association',
    type: 'Housing',
    location: 'Kazan (Near KFU)',
    category: 'Housing',
    posted: '3 days ago',
    description: 'One room available in a 3-room apartment. Sharing with two other Zimbabwean students. $200/month.'
  },
  {
    id: 4,
    title: 'Master\'s Scholarship Program',
    organization: 'Russian Ministry of Education',
    type: 'Scholarship',
    location: 'Nationwide',
    category: 'Education',
    posted: '2 weeks ago',
    description: 'Open Government Scholarships for international students pursuing Master\'s degrees in STEM fields.'
  }
];

export default function Opportunities() {
  return (
    <div className="py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 font-display sm:text-4xl">Opportunities Board</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Find jobs, internships, housing, and scholarships shared by the community and verified partners.
          </p>
        </div>
        <button className="rounded-full bg-gray-900 hover:bg-brand-green px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-sm transition-colors whitespace-nowrap">
          Post an Opportunity
        </button>
      </div>

      <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar">
        {['All', 'Jobs', 'Internships', 'Housing', 'Scholarships'].map((filter, i) => (
          <button 
            key={filter}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${
              i === 0 
                ? 'bg-gray-900 text-white' 
                : 'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {opportunities.map((opp) => (
          <div key={opp.id} className="group relative flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm hover:border-brand-green hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center rounded-full bg-brand-green/10 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-brand-green">
                  {opp.category}
                </span>
                <span className="flex items-center text-xs text-gray-500 font-bold uppercase tracking-widest">
                  <Clock className="mr-1 h-3 w-3" />
                  {opp.posted}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-display group-hover:text-brand-green transition-colors">
                <a href="#">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {opp.title}
                </a>
              </h3>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <Building2 className="h-4 w-4 text-gray-400" />
                  {opp.organization}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  {opp.location}
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 line-clamp-3">
                {opp.description}
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between pt-6 border-t border-gray-100">
              <span className="text-sm font-bold text-gray-900">{opp.type}</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-brand-yellow">
                View Details <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-10">
        <button className="rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
          View Previous
        </button>
      </div>
    </div>
  );
}
