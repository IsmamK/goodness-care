'use client'
import Link from 'next/link'

export default function Hero() {
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
              Goodness Service Ltd. is one of Bangladesh's most trusted human resource management companies, connecting skilled professionals with global opportunities across 20+ countries.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/worker-registration"
                className="text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}
              >
                Register as Worker
              </Link>
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

          {/* Right image */}
          <div className="scroll-animate-right animate-in relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://stechhr.com/backend/media/uploaded_images/uploaded_images/screenshot-2025-12-06-161717.png"
                alt="Global workforce solutions"
                className="w-full h-[520px] object-cover"
              />
              {/* Overlay badge */}
              <div
                className="absolute bottom-6 left-6 text-white px-5 py-3 rounded-xl shadow-lg"
                style={{ background: 'linear-gradient(135deg, #1a3580ee, #4facdeee)' }}
              >
                <p className="font-bold text-lg">Tareq Abdullah</p>
                <p className="text-sm opacity-90">Chief Executive Officer</p>
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
