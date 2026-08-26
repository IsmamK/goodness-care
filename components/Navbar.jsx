'use client'
import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Registration',
    dropdown: [
      { label: 'Worker Registration', href: '/worker-registration' },
      { label: 'Agent Registration', href: '/agent-registration' },
      { label: 'Apply for Jobs Now', href: '/apply-jobs-now' },
    ],
  },
  { label: 'Medical Report', href: '/medical-report' },
  { label: 'Demand Submission', href: '/demand-submission' },
  { label: 'Training', href: '/training' },
  { label: 'Gallery', href: '/gallery' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Goodness Service Ltd."
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold" style={{ color: '#1a3580' }}>Goodness Service <span style={{ color: '#4facde' }}>Ltd.</span></span>
              <span className="text-xs font-medium tracking-wide" style={{ color: '#1e6eb5' }}>RL-2068</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-5">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button
                    className="font-medium text-sm flex items-center gap-1 transition-colors"
                    style={{ color: '#1a3580' }}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm transition-colors hover:bg-blue-50"
                        style={{ color: '#1a3580' }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-sm transition-colors hover:opacity-70"
                  style={{ color: '#1a3580' }}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            style={{ color: '#1a3580' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <p className="text-xs font-semibold px-2 py-1 uppercase tracking-wider" style={{ color: '#4facde' }}>{link.label}</p>
                {link.dropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block pl-6 py-2 text-sm transition-colors hover:opacity-70"
                    style={{ color: '#1a3580' }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: '#1a3580' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="block mt-2 text-white text-center px-4 py-2 rounded-lg text-sm font-semibold"
            style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  )
}
