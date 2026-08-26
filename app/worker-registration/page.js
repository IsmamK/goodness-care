'use client'
import { useState } from 'react'

const countries = ['Malaysia', 'Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Oman', 'Maldives', 'Russia', 'Vietnam', 'Other']
const trades = ['Plantation Worker', 'Construction Worker', 'Domestic Helper', 'Driver', 'Electrician', 'Plumber', 'Carpenter', 'Mason', 'Painter', 'Welder', 'Mechanic', 'Cleaner', 'Security Guard', 'Other']

const inputClass = 'w-full border-2 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none'
const inputStyle = { borderColor: '#e2e8f0' }
const labelClass = 'block text-sm font-semibold mb-1.5'

export default function WorkerRegistrationPage() {
  const [form, setForm] = useState({ fullName: '', passportNo: '', dob: '', phone: '', email: '', country: '', trade: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }) }
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="bg-white min-h-screen">
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-blue-100 text-sm font-semibold tracking-widest uppercase mb-3">Join Our Network</p>
          <h1 className="text-5xl font-bold text-white mb-4">Worker Registration</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Register to find opportunities abroad with Goodness Service Ltd.</p>
        </div>
      </div>
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          {submitted ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#1a3580' }}>Registration Submitted!</h2>
              <p className="text-gray-600">Thank you for registering. Our team will contact you within 2-3 business days.</p>
            </div>
          ) : (
            <div className="bg-white border-2 rounded-2xl p-8 shadow-sm" style={{ borderColor: '#e2e8f0' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1a3580' }}>Personal Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'Your full name as in passport' },
                  { label: 'Passport Number', name: 'passportNo', type: 'text', placeholder: 'e.g. AB1234567' },
                  { label: 'Date of Birth', name: 'dob', type: 'date', placeholder: '' },
                  { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+880XXXXXXXXXX' },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your@email.com' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className={labelClass} style={{ color: '#1a3580' }}>{field.label}</label>
                    <input type={field.type} name={field.name} required value={form[field.name]} onChange={handleChange} placeholder={field.placeholder} className={inputClass} style={inputStyle} />
                  </div>
                ))}
                <div>
                  <label className={labelClass} style={{ color: '#1a3580' }}>Country of Interest</label>
                  <select name="country" required value={form.country} onChange={handleChange} className={inputClass} style={inputStyle}>
                    <option value="">Select country</option>
                    {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass} style={{ color: '#1a3580' }}>Trade / Skill</label>
                  <select name="trade" required value={form.trade} onChange={handleChange} className={inputClass} style={inputStyle}>
                    <option value="">Select trade/skill</option>
                    {trades.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass} style={{ color: '#1a3580' }}>Message (Optional)</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Any additional information..." className={inputClass + ' resize-none'} style={inputStyle} />
                </div>
                <button type="submit" className="w-full text-white py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}>
                  Submit Registration
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
