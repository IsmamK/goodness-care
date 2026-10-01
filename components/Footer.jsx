'use client'
import Link from 'next/link'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Training', href: '/training' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

const registrationLinks = [
  { label: 'Worker Registration', href: '/worker-registration' },
  { label: 'Agent Registration', href: '/agent-registration' },
  { label: 'Apply for Jobs', href: '/apply-jobs-now' },
  { label: 'Demand Submission', href: '/demand-submission' },
  { label: 'Medical Report', href: '/medical-report' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a3580' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* Branding column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="Goodness Service Ltd."
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold text-white">Goodness Service <span style={{ color: '#4facde' }}>Ltd.</span></span>
                <span className="text-xs font-medium tracking-wide" style={{ color: '#4facde' }}>GOVT. LIC. RL-2068</span>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              One of the most trusted human resource management companies in Bangladesh, connecting skilled workers with global opportunities.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:border-[#4facde] transition-colors"
                aria-label="Facebook">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:border-[#4facde] transition-colors"
                aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#4facde' }}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-blue-200 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Registration */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#4facde' }}>Registration</h3>
            <ul className="space-y-2">
              {registrationLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-blue-200 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: '#4facde' }}>Contact Us</h3>
            <div className="space-y-4 text-sm text-blue-200">
              <div>
                <p className="text-white font-semibold mb-1">Head Office</p>
                <p>10/3, 9th Floor, City Heart Centre, (Opposite Paltan Model Thana), 67, Naya Paltan, Dhaka - 1000</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Branch Office</p>
                <p>House 79, Block J, 2nd Floor, Airport Road, Chairman Bari, Banani, Dhaka - 1213</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Phone</p>
                <p>+88 01335 18 17 17</p>
                <p>+88 01777 94 72 26</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Email</p>
                <a href="mailto:goodnssl2026@gmail.com" className="hover:text-white transition-colors">goodnssl2026@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()}{' '}
            <span className="font-semibold text-white">Goodness Service Ltd.</span> All Rights Reserved. | GOVT. APPROVED RECRUITING LICENCE NO. RL-2068
          </p>
        </div>
      </div>
    </footer>
  )
}
