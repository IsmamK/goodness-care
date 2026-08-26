'use client'
import { useState } from 'react'

const recruitmentSteps = [
  { n: 1, title: 'Client Requirement', desc: 'Understanding employer needs, job categories, and deployment timelines.' },
  { n: 2, title: 'Candidate Sourcing', desc: 'Sourcing qualified candidates through our nationwide network and database.' },
  { n: 3, title: 'Screening & Testing', desc: 'Thorough skills assessment, interviews, and background verification.' },
  { n: 4, title: 'Medical Examination', desc: 'Government-approved medical fitness testing at certified centers.' },
  { n: 5, title: 'Documentation', desc: 'Passport, visa, work permit, and BMET clearance processing.' },
  { n: 6, title: 'Pre-Departure Training', desc: 'Orientation, language basics, cultural briefing, and job-specific training.' },
  { n: 7, title: 'Mobilization', desc: 'Final departure coordination and airport assistance for smooth deployment.' },
]

const mobilizationSteps = [
  { n: 1, title: 'Demand Letter Review', desc: 'Verifying employer demand letter, job offers, and attestation.' },
  { n: 2, title: 'BMET Registration', desc: 'Registering workers with Bureau of Manpower, Employment and Training.' },
  { n: 3, title: 'Smart Card', desc: 'Obtaining emigration clearance smart card from BMET.' },
  { n: 4, title: 'Insurance', desc: 'Arranging mandatory overseas employment insurance coverage.' },
  { n: 5, title: 'Ticket & Visa Stamping', desc: 'Coordinating visa stamping and flight ticket booking.' },
  { n: 6, title: 'Airport Assistance', desc: 'Full support at Hazrat Shahjalal International Airport on departure day.' },
]

export default function Process() {
  const [tab, setTab] = useState('recruitment')
  const steps = tab === 'recruitment' ? recruitmentSteps : mobilizationSteps

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 scroll-animate animate-in">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#4facde' }}>How We Work</p>
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a3580' }}>Our Process</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }} />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-3 scroll-animate animate-in">
          {[
            { id: 'recruitment', label: 'Recruitment Process' },
            { id: 'mobilization', label: 'Mobilization Process' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
              style={
                tab === t.id
                  ? { background: 'linear-gradient(to right, #4facde, #1a3580)', color: '#fff' }
                  : { backgroundColor: '#f1f5f9', color: '#1a3580' }
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="scroll-animate animate-in bg-white border-2 rounded-2xl p-5 hover:shadow-md transition-all duration-300"
              style={{ borderColor: '#e2e8f0', transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4"
                style={{ background: 'linear-gradient(135deg, #4facde, #1a3580)' }}
              >
                {step.n}
              </div>
              <h3 className="font-bold text-sm mb-2" style={{ color: '#1a3580' }}>{step.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
