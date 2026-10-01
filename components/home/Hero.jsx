'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { processSteps } from '../../lib/processSteps'

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % processSteps.length)
    }, 1400)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-white min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="scroll-animate-left animate-in">
            {/* Badge */}
            <span
              className="inline-block text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase"
              style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}
            >
              GOVT. APPROVED RECRUITING LICENCE NO. RL-2068
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#1a3580' }}>
              Global Workforce <br />
              <span style={{ color: '#4facde' }}>Solutions</span> You Can Trust
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Goodness Service is one of Bangladesh's most trusted human resource management companies, connecting skilled professionals with global opportunities across 20+ countries.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/documents/Goodness-Services-Profile.pdf"
                download
                className="text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}
              >
                Download Company Profile
              </a>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 border-2 hover:bg-blue-50"
                style={{ color: '#1a3580', borderColor: '#1a3580' }}
              >
                Contact Us
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { label: '50,000+', desc: 'Workers Placed' },
                { label: '20+', desc: 'Countries' },
                { label: '90%', desc: 'Satisfaction Rate' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold" style={{ color: '#1a3580' }}>{stat.label}</span>
                  <span className="text-sm text-gray-500">{stat.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: animated process steps */}
          <div className="scroll-animate-right animate-in relative">
            <div className="relative rounded-2xl p-8 bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#4facde' }}>
                Your Journey With Us
              </p>
              <div className="grid grid-cols-3 gap-y-8 gap-x-2">
                {processSteps.map((step, i) => {
                  const isActive = i === active
                  const isDone = i < active
                  return (
                    <div key={step.n} className="relative flex flex-col items-center text-center">
                      {i % 3 !== 0 && (
                        <div
                          className="hidden sm:block absolute top-5 right-1/2 w-full h-0.5 -z-0 transition-colors duration-500"
                          style={{ backgroundColor: isDone || isActive ? '#4facde' : '#e2e8f0' }}
                        />
                      )}
                      <div
                        className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold mb-2 transition-all duration-500"
                        style={
                          isActive
                            ? {
                                background: 'linear-gradient(135deg, #4facde, #1a3580)',
                                color: '#fff',
                                boxShadow: '0 0 0 6px rgba(79,172,222,0.25)',
                                transform: 'scale(1.15)',
                              }
                            : isDone
                            ? { background: 'linear-gradient(135deg, #4facde, #1a3580)', color: '#fff' }
                            : { backgroundColor: '#fff', color: '#94a3b8', border: '2px solid #e2e8f0' }
                        }
                      >
                        {step.n}
                      </div>
                      <span
                        className="text-xs font-semibold transition-colors duration-500"
                        style={{ color: isActive || isDone ? '#1a3580' : '#94a3b8' }}
                      >
                        {step.title}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* Decorative circles */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
              style={{ background: 'linear-gradient(to bottom right, #4facde, #1a3580)' }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20"
              style={{ background: 'linear-gradient(to bottom right, #1a3580, #4facde)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
