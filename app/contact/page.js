'use client'
import { useState } from 'react'

const emails = ['goodnssl2026@gmail.com', 'info@goodnessservice.com']

const offices = [
  {
    name: 'Head Office',
    flag: '🇧🇩',
    address: '10/3, 9th Floor, City Heart Centre, (Opposite Paltan Model Thana), 67, Naya Paltan, Dhaka - 1000',
    phone: '+88 01335 18 17 17',
  },
  {
    name: 'Branch Office',
    flag: '🏢',
    address: 'House 79, Block J, 2nd Floor, Airport Road, Chairman Bari, Banani, Dhaka - 1213',
    phone: '+88 01335 18 17 17',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const res = await fetch('https://formsubmit.co/ajax/ceo@stechgroupbd.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _subject: 'New enquiry from Goodness Service website',
        }),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch (err) {
      setError(true)
    } finally {
      setSending(false)
    }
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
                <p className="text-sm mb-1">
                  <span className="font-semibold" style={{ color: '#1a3580' }}>Email: </span>
                  {emails.map((email, i) => (
                    <span key={email}>
                      <a href={`mailto:${email}`} className="text-gray-600 hover:text-[#1a3580]">{email}</a>
                      {i < emails.length - 1 && <span className="text-gray-400"> / </span>}
                    </span>
                  ))}
                </p>
                <p className="text-sm">
                  <span className="font-semibold" style={{ color: '#1a3580' }}>Phone: </span>
                  <span className="text-gray-600">{office.phone}</span>
                </p>
              </div>
            ))}
          </div>


          {/* Contact form */}
          <div className="grid lg:grid-cols-1 gap-12">
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
                  {error && (
                    <p className="text-sm text-red-600">Something went wrong sending your message. Please try again or email us directly at info@goodnessservice.com.</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full text-white py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg disabled:opacity-60"
                    style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}
