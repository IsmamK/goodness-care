'use client'

const industries = [
  {
    name: 'Plantation',
    desc: 'Skilled labor for palm oil and plantation harvesting operations abroad.',
    icon: '🌴',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Oil_Palm_Gardens_by_BUL_in_Kalangala_district%2C_Uganda.jpg/960px-Oil_Palm_Gardens_by_BUL_in_Kalangala_district%2C_Uganda.jpg',
  },
  {
    name: 'Construction',
    desc: 'Supplying skilled civil, structural, and finishing workers for major projects worldwide.',
    icon: '🏗️',
    image: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Poultry Farming',
    desc: 'Farm hands and technicians for large-scale poultry operations.',
    icon: '🐔',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Service Sectors',
    desc: 'Cleaning, housekeeping, and facility support staff for commercial spaces.',
    icon: '🧹',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Fruit and Vegetable Farming',
    desc: 'Agricultural workers for harvesting and packing fresh produce.',
    icon: '🥕',
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'RMG & Textiles',
    desc: 'Garment and textile factory workers for the ready-made garment sector.',
    icon: '🧵',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Manufacturing Factory',
    desc: 'Experienced workers for factories, production lines, and industrial facilities.',
    icon: '🏭',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Machine_working_in_a_factory_while_cutting_material_on_a_production_line_in_the_workshop.jpg/960px-Machine_working_in_a_factory_while_cutting_material_on_a_production_line_in_the_workshop.jpg',
  },
  {
    name: 'Dairy Farming',
    desc: 'Farm workers experienced in dairy cattle handling and milk processing.',
    icon: '🥛',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Ship Breaking',
    desc: 'Skilled labor for ship dismantling and heavy metal recovery yards.',
    icon: '⚓',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Alang_ship_breaking_yard_3.jpg/960px-Alang_ship_breaking_yard_3.jpg',
  },
  {
    name: 'Automobile',
    desc: 'Technicians and assembly workers for automotive manufacturing plants.',
    icon: '🚗',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Oil & Gas',
    desc: 'Technicians and operators for oil fields, refineries, and energy facilities.',
    icon: '⚙️',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/00_3783_Oil_and_gas_platform_in_Norway.jpg/960px-00_3783_Oil_and_gas_platform_in_Norway.jpg',
  },
  {
    name: 'Quarry & Mining',
    desc: 'Heavy equipment operators and laborers for quarry and mining sites.',
    icon: '⛏️',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="scroll-animate animate-in relative rounded-xl overflow-hidden group cursor-default shadow-sm"
              style={{ transitionDelay: `${(i % 6) * 80}ms` }}
            >
              <img
                src={ind.image}
                alt={ind.name}
                className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Normal overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}
              />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                <div className="text-lg mb-0.5 group-hover:hidden">{ind.icon}</div>
                <h3 className="font-bold text-xs leading-tight">{ind.name}</h3>
                <p className="text-[11px] text-white/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug hidden sm:block">
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
