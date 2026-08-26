'use client'
import Link from 'next/link'

const features = [
  {
    icon: '🏛️',
    title: 'Government Licensed',
    desc: 'Operating under Govt. Approved Recruiting Licence No. RL-2068 with full regulatory compliance.',
  },
  {
    icon: '🌐',
    title: 'Global Reach',
    desc: 'Established networks and partnerships with reputable employers in 20+ countries worldwide.',
  },
  {
    icon: '⚡',
    title: 'Fast Processing',
    desc: 'Streamlined documentation and visa processing to minimize delays and get workers deployed quickly.',
  },
  {
    icon: '🎓',
    title: 'Skilled Workforce',
    desc: 'Comprehensive pre-departure training ensuring workers are fully prepared for their overseas roles.',
  },
  {
    icon: '🤝',
    title: 'Trusted by Employers',
    desc: 'Long-standing relationships with leading international companies who rely on us for quality placements.',
  },
  {
    icon: '💬',
    title: '12/7 Support',
    desc: 'Round-the-clock support for workers and employers — before, during, and after deployment.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 scroll-animate animate-in">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-blue-200">Our Advantages</p>
          <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Goodness Service Ltd.</h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-white/40" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="scroll-animate animate-in bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-animate animate-in">
          <Link
            href="/about"
            className="inline-block bg-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg"
            style={{ color: '#1a3580' }}
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}
