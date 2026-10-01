'use client'
import { processSteps } from '../../lib/processSteps'

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 scroll-animate animate-in">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#4facde' }}>How We Work</p>
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a3580' }}>Our Process</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }} />
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {processSteps.map((step, i) => (
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
