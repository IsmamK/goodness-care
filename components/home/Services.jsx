'use client'
import { useState } from 'react'

const services = [
  {
    id: 'recruitment',
    title: 'Overseas Recruitment',
    description: 'We specialize in sourcing, screening, and deploying skilled and semi-skilled workers to leading employers across the Middle East, Southeast Asia, and beyond. Our thorough vetting process ensures quality placements.',
    icon: '🌍',
  },
  {
    id: 'training',
    title: 'Pre-Departure Training',
    description: 'Comprehensive training programs that prepare workers for their roles abroad, covering job-specific skills, cultural orientation, language basics, and safety protocols.',
    icon: '🎓',
  },
  {
    id: 'medical',
    title: 'Medical Fitness Testing',
    description: 'Coordination of government-approved medical examinations required for overseas employment, ensuring workers meet all health requirements of destination countries.',
    icon: '🏥',
  },
  {
    id: 'documentation',
    title: 'Documentation & Visa',
    description: 'End-to-end documentation support including passport processing, visa applications, work permits, and all necessary government clearances for smooth deployment.',
    icon: '📋',
  },
  {
    id: 'demand',
    title: 'Demand Processing',
    description: 'Efficient processing of foreign employer demands — from initial demand letter to final mobilization. We ensure compliance with BMET and government regulations at every step.',
    icon: '📨',
  },
  {
    id: 'welfare',
    title: 'Worker Welfare',
    description: 'Ongoing support for workers during their employment abroad, including grievance handling, welfare monitoring, and repatriation assistance when needed.',
    icon: '🤝',
  },
]

export default function Services() {
  const [active, setActive] = useState('recruitment')
  const activeService = services.find((s) => s.id === active)

  return (
    <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 scroll-animate animate-in">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#4facde' }}>What We Offer</p>
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a3580' }}>Our Services</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar tabs */}
          <div className="space-y-2">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className="w-full text-left px-5 py-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center gap-3"
                style={
                  active === s.id
                    ? { background: 'linear-gradient(to right, #1a3580, #4facde)', color: '#fff' }
                    : { backgroundColor: '#fff', color: '#1a3580', border: '2px solid #e2e8f0' }
                }
              >
                <span className="text-xl">{s.icon}</span>
                {s.title}
              </button>
            ))}
          </div>

          {/* Description panel */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center">
            {activeService && (
              <div key={activeService.id} className="scroll-animate animate-in">
                <div className="text-5xl mb-4">{activeService.icon}</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1a3580' }}>{activeService.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{activeService.description}</p>
                <div className="mt-6 flex gap-4">
                  <a
                    href="/contact"
                    className="text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all"
                    style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
