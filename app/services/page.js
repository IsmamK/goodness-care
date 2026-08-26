import Link from 'next/link'

const services = [
  { slug: 'recruitment', icon: '🎯', title: 'Recruitment', desc: 'Strategic talent acquisition with global reach and precision matching. We connect the right candidates with the right employers across 20+ countries.' },
  { slug: 'medical', icon: '🏥', title: 'Medical', desc: 'Comprehensive medical fitness testing through GAMCA-approved centers, ensuring all workers meet international health standards.' },
  { slug: 'documentation', icon: '📄', title: 'Documentation', desc: 'End-to-end visa and documentation processing, including embassy attestation, work permits, and passport management.' },
  { slug: 'ticketing', icon: '✈️', title: 'Ticketing', desc: 'Seamless travel arrangements including international flight booking, group travel coordination, and travel insurance support.' },
  { slug: 'welfare', icon: '🤝', title: 'Welfare', desc: 'Ongoing worker welfare and support services, including 12/7 assistance, grievance resolution, and repatriation support.' },
  { slug: 'consultancy', icon: '💼', title: 'Consultancy', desc: 'Expert advisory services for employers and workers, covering compliance, salary benchmarking, and regulatory guidance.' },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-100 text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</p>
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Comprehensive recruitment and workforce management solutions for employers and job seekers worldwide</p>
        </div>
      </div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.slug} className="bg-white border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col" style={{ borderColor: '#e2e8f0' }}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-xl mb-2" style={{ color: '#1a3580' }}>{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{s.desc}</p>
                <Link href={'/services/' + s.slug} className="inline-block text-white px-5 py-2.5 rounded-xl text-sm font-semibold self-start hover:shadow-md" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}>Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
