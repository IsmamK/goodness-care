import Link from 'next/link'
import { notFound } from 'next/navigation'

const servicesData = {
  recruitment: {
    icon: '🎯',
    title: 'Recruitment',
    desc: 'Strategic talent acquisition with global reach and precision matching. Our recruitment process is designed to connect the right candidates with the right employers, ensuring mutual success across international borders.',
    subServices: [
      { title: 'Executive Search', desc: 'Targeted headhunting for senior and specialized roles.' },
      { title: 'Mass Recruitment', desc: 'Large-scale hiring campaigns for plantation, construction, and manufacturing.' },
      { title: 'Skill Assessment', desc: 'Trade tests and competency evaluations to match client standards.' },
      { title: 'Background Verification', desc: 'Thorough reference checks and criminal record verification.' },
    ],
  },
  medical: {
    icon: '🏥',
    title: 'Medical',
    desc: 'Comprehensive medical fitness testing through GAMCA-approved centers, ensuring all workers meet the health requirements of destination countries.',
    subServices: [
      { title: 'GAMCA Tests', desc: 'Full medical screening at government-approved centers.' },
      { title: 'Health Certification', desc: 'Medical fitness certificates accepted by all destination countries.' },
      { title: 'Follow-up Care', desc: 'Guidance for workers who require additional health support.' },
      { title: 'Pre-departure Check', desc: 'Final health clearance before international departure.' },
    ],
  },
  documentation: {
    icon: '📄',
    title: 'Documentation',
    desc: 'End-to-end visa and documentation processing for smooth international placement, handled by our experienced documentation team.',
    subServices: [
      { title: 'Visa Processing', desc: 'Work visa applications for all major destination countries.' },
      { title: 'Embassy Coordination', desc: 'Direct liaison with foreign embassies for fast approvals.' },
      { title: 'Document Authentication', desc: 'Notarization and attestation of all required documents.' },
      { title: 'Work Permit', desc: 'Assistance with employer-sponsored work permit applications.' },
    ],
  },
  ticketing: {
    icon: '✈️',
    title: 'Ticketing',
    desc: 'Seamless travel arrangements ensuring every worker reaches their destination safely and on time with full support throughout the journey.',
    subServices: [
      { title: 'Flight Booking', desc: 'International flight reservations on major airlines.' },
      { title: 'Group Travel', desc: 'Coordinated group departures for large deployments.' },
      { title: 'Travel Insurance', desc: 'Comprehensive travel insurance for all deployed workers.' },
      { title: 'Transit Support', desc: 'Assistance during layovers and transit stops.' },
    ],
  },
  welfare: {
    icon: '🤝',
    title: 'Welfare',
    desc: 'Ongoing worker welfare support and crisis management ensuring every deployed worker is safe, supported, and treated with dignity.',
    subServices: [
      { title: '12/7 Helpline', desc: 'Round-the-clock support for workers in distress.' },
      { title: 'Grievance Resolution', desc: 'Mediation between workers and employers for conflict resolution.' },
      { title: 'Repatriation', desc: 'Emergency repatriation support when needed.' },
      { title: 'Legal Assistance', desc: 'Legal support for workers facing workplace issues abroad.' },
    ],
  },
  consultancy: {
    icon: '💼',
    title: 'Consultancy',
    desc: 'Expert guidance for employers and workers navigating global employment markets, with deep knowledge of regulatory requirements across all destination countries.',
    subServices: [
      { title: 'Market Analysis', desc: 'Labor market insights for strategic hiring decisions.' },
      { title: 'Compliance Advisory', desc: 'Ensuring adherence to Bangladesh and international labor laws.' },
      { title: 'Salary Benchmarking', desc: 'Competitive salary analysis for different trades and countries.' },
      { title: 'HR Policy Consulting', desc: 'Development of overseas HR policies and employee handbooks.' },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData[params.slug]
  if (!service) notFound()

  return (
    <div className="bg-white">
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-blue-100 text-sm hover:text-white mb-6 inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <p className="text-blue-100 text-sm font-semibold tracking-widest uppercase">Our Services</p>
              <h1 className="text-4xl font-bold text-white">{service.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl">{service.desc}</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#1a3580' }}>What&apos;s Included</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.subServices.map((sub) => (
              <div key={sub.title} className="bg-white border-2 rounded-2xl p-6 hover:shadow-md transition-all duration-300" style={{ borderColor: '#e2e8f0' }}>
                <h3 className="font-bold mb-2" style={{ color: '#1a3580' }}>{sub.title}</h3>
                <p className="text-gray-600 text-sm">{sub.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block text-white px-8 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg"
              style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
