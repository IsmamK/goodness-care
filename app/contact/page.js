'use client'
import { useState } from 'react'

const offices = [
  {
    name: 'Head Office',
    flag: '🇧🇩',
    address: '10/3, 9th Floor, City Heart Centre, (Opposite Paltan Model Thana), 67, Naya Paltan, Dhaka - 1000',
    email: 'goodness2026@gmail.com',
    phone: '+88 01335 18 17 17',
  },
  {
    name: 'Branch Office',
    flag: '🏢',
    address: 'House 79, Block J, 2nd Floor, Airport Road, Chairman Bari, Banani, Dhaka - 1213',
    phone: '+88 01777 94 72 26',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-100 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-blue-100 max-w-xl mx-auto">We are here to help. Reach out to us for any queries about recruitment, registration, or our services.</p>
        </div>
      </div>

      {/* Contact info + form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Office cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {offices.map((office) => (
              <div
                key={office.name}
                className="rounded-2xl p-6 border-2 hover:shadow-lg transition-all duration-300"
                style={{ borderColor: '#e2e8f0' }}
              >
                <div className="text-3xl mb-3">{office.flag}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1a3580' }}>{office.name}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{office.address}</p>
                {office.email && (
                  <p className="text-sm mb-1">
                    <span className="font-semibold" style={{ color: '#1a3580' }}>Email: </span>
                    <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-[#1a3580]">{office.email}</a>
                  </p>
                )}
                <p className="text-sm">
                  <span className="font-semibold" style={{ color: '#1a3580' }}>Phone: </span>
                  <span className="text-gray-600">{office.phone}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Quick contact info */}
          <div className="grid sm:grid-cols-3 gap-5 mb-16">
            {[
              { icon: '📞', label: 'Phone', value: '+88 01335 18 17 17 / +88 01777 94 72 26' },
              { icon: '✉️', label: 'Email', value: 'goodness2026@gmail.com' },
              { icon: '🏛️', label: 'Licence', value: 'GOVT. APPROVED RECRUITING LICENCE NO. RL-2068' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl p-5 border-2"
                style={{ borderColor: '#e2e8f0' }}
              >
                <div className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: '#1a3580' }}>{item.label}</p>
                  <p className="text-gray-600 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-3" style={{ color: '#1a3580' }}>Send Us a Message</h2>
              <p className="text-gray-500 mb-8 text-sm">Fill out the form and our team will get back to you within 24 hours.</p>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <p className="font-semibold text-green-700">Message sent successfully!</p>
                  <p className="text-gray-500 text-sm mt-1">We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Your full name' },
                    { label: 'Email Address', key: 'email', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+88 0XXXXXXXXXX' },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: '#1a3580' }}>{label}</label>
                      <input
                        type={type}
                        required={key !== 'phone'}
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full border-2 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
                        style={{ borderColor: '#e2e8f0' }}
                        placeholder={placeholder}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#1a3580' }}>Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border-2 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none transition-colors resize-none"
                      style={{ borderColor: '#e2e8f0' }}
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg"
                    style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right panel */}
            <div className="space-y-6">
              <div className="rounded-2xl p-6 border-2" style={{ borderColor: '#e2e8f0' }}>
                <h3 className="font-bold text-lg mb-4" style={{ color: '#1a3580' }}>Goodness Service Ltd.</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p><span className="font-semibold" style={{ color: '#1a3580' }}>CEO: </span>Tareq Abdullah</p>
                  <p><span className="font-semibold" style={{ color: '#1a3580' }}>Licence: </span>GOVT. APPROVED RECRUITING LICENCE NO. RL-2068</p>
                  <p><span className="font-semibold" style={{ color: '#1a3580' }}>Head Office: </span>10/3, 9th Floor, City Heart Centre, 67, Naya Paltan, Dhaka - 1000</p>
                  <p><span className="font-semibold" style={{ color: '#1a3580' }}>Branch Office: </span>House 79, Block J, 2nd Floor, Airport Road, Banani, Dhaka - 1213</p>
                  <p><span className="font-semibold" style={{ color: '#1a3580' }}>Phone: </span>+88 01335 18 17 17 / +88 01777 94 72 26</p>
                  <p><span className="font-semibold" style={{ color: '#1a3580' }}>Email: </span>goodness2026@gmail.com</p>
                </div>
              </div>

              <div
                className="rounded-2xl p-6 text-white text-center"
                style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}
              >
                <p className="font-bold text-xl mb-2">Ready to Get Started?</p>
                <p className="text-blue-100 text-sm mb-4">Register your interest and our team will contact you.</p>
                <a
                  href="/worker-registration"
                  className="inline-block bg-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-all hover:shadow-lg"
                  style={{ color: '#1a3580' }}
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
