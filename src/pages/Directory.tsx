import { Search, MapPin, Briefcase, GraduationCap, Filter } from 'lucide-react';

const users = [
  { id: 1, name: 'Praise Chava', role: 'Student', field: 'Software Engineering', city: 'Kazan', initials: 'PC', color: 'bg-brand-green/10 text-brand-green' },
  { id: 2, name: 'Tatenda Mutero', role: 'Professional', field: 'Medicine', city: 'Moscow', initials: 'TM', color: 'bg-blue-100 text-blue-700' },
  { id: 3, name: 'Chipo Samuriwo', role: 'Student', field: 'International Relations', city: 'St. Petersburg', initials: 'CS', color: 'bg-brand-yellow/30 text-yellow-800' },
  { id: 4, name: 'Tinashe Moyo', role: 'Professional', field: 'Finance', city: 'Kazan', initials: 'TM', color: 'bg-purple-100 text-purple-700' },
  { id: 5, name: 'Rudo Ndlovu', role: 'Student', field: 'Architecture', city: 'Novosibirsk', initials: 'RN', color: 'bg-brand-red/10 text-brand-red' },
  { id: 6, name: 'Farai Gumbo', role: 'Student', field: 'Aerospace Engineering', city: 'Moscow', initials: 'FG', color: 'bg-indigo-100 text-indigo-700' },
];

export default function Directory() {
  return (
    <div className="py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 font-display sm:text-4xl">Community Directory</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Connect with other Zimbabweans across Russia. Filter by city, university, or profession to build your network.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full rounded-full border-0 py-3 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-green sm:text-sm sm:leading-6"
            placeholder="Search by name, field, or role..."
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-inset ring-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
            <MapPin className="h-4 w-4 text-gray-400" />
            City
          </button>
          <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-inset ring-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
            <GraduationCap className="h-4 w-4 text-gray-400" />
            Role
          </button>
          <button className="flex lg:hidden items-center justify-center rounded-full bg-gray-100 p-3 text-gray-700 hover:bg-gray-200 transition-colors">
            <Filter className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="relative flex items-center space-x-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-brand-green hover:shadow-md transition-all">
            <div className={`flex h-14 w-14 items-center justify-center rounded-full ${user.color} font-display font-semibold text-xl shrink-0`}>
              {user.initials}
            </div>
            <div className="min-w-0 flex-auto space-y-1">
              <p className="text-sm font-bold text-gray-900">
                <a href="#">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {user.name}
                </a>
              </p>
              <div className="flex items-center text-xs text-gray-500 gap-1.5 line-clamp-1">
                {user.role === 'Student' ? <GraduationCap className="h-3.5 w-3.5" /> : <Briefcase className="h-3.5 w-3.5" />}
                {user.role} &bull; {user.field}
              </div>
              <div className="flex items-center text-xs text-gray-500 gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {user.city}
              </div>
            </div>
            <div className="shrink-0">
              <button 
                type="button" 
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-semibold text-brand-green ring-1 ring-inset ring-brand-green/20 hover:bg-gray-100 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors">
          Load More Profiles
        </button>
      </div>
    </div>
  );
}
