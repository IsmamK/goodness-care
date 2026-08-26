'use client'

const industries = [
  {
    name: 'Construction',
    desc: 'Supplying skilled civil, structural, and finishing workers for major projects worldwide.',
    icon: '🏗️',
    image: 'https://stechhr.com.bd/wp-content/uploads/2022/05/silhouette-construction-workers-fabricating-steel-reinforcement-bar-construction-si.jpeg',
  },
  {
    name: 'Manufacturing',
    desc: 'Experienced workers for factories, production lines, and industrial facilities.',
    icon: '🏭',
    image: 'https://images.unsplash.com/photo-1565793979139-ced8e4edac0e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Hospitality',
    desc: 'Hotel, restaurant, and tourism professionals for the global hospitality sector.',
    icon: '🏨',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Healthcare',
    desc: 'Nurses, caregivers, and medical support staff for hospitals and clinics abroad.',
    icon: '🏥',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Oil & Gas',
    desc: 'Technicians and operators for oil fields, refineries, and energy facilities.',
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1519818547498-e70e3de64462?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Retail & Trade',
    desc: 'Sales staff, supervisors, and tradespeople for commercial and retail operations.',
    icon: '🛒',
    image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 scroll-animate animate-in">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#4facde' }}>Sectors We Cover</p>
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a3580' }}>Industries We Serve</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="scroll-animate animate-in relative rounded-2xl overflow-hidden group cursor-default shadow-sm"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              <img
                src={ind.image}
                alt={ind.name}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Normal overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}
              />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="text-2xl mb-1 group-hover:hidden">{ind.icon}</div>
                <h3 className="font-bold text-lg">{ind.name}</h3>
                <p className="text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
