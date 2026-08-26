'use client'

const stats = [
  { value: '50,000+', label: 'WORKERS PLACED' },
  { value: '20+', label: 'COUNTRIES SERVED' },
  { value: '90%', label: 'SATISFACTION RATE' },
  { value: '12/7', label: 'SUPPORT' },
]

export default function Statistics() {
  return (
    <section style={{ background: 'linear-gradient(to right, #1a3580, #4facde)' }} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {stats.map((stat, i) => (
            <div key={i} className="scroll-animate animate-in" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm font-semibold tracking-widest opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
