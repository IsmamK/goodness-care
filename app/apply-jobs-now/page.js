'use client'
import { useState } from 'react'

const countries = ['Malaysia', 'Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Oman', 'Maldives', 'Russia', 'Vietnam', 'Other']
const trades = ['Plantation Worker', 'Construction Worker', 'Domestic Helper', 'Driver', 'Electrician', 'Plumber', 'Carpenter', 'Mason', 'Painter', 'Welder', 'Mechanic', 'Cleaner', 'Security Guard', 'Hospitality', 'Healthcare', 'Engineering', 'Other']

const inputClass = 'w-full border-2 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none'
const inputStyle = { borderColor: '#e2e8f0' }

export default function ApplyJobsPage() {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', passportNo: '', trade: '', experience: '', preferredCountry: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }) }
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="bg-white min-h-screen">
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-blue-100 text-sm font-semibold tracking-widest uppercase mb-3">Career Opportunities</p>
          <h1 className="text-5xl font-bold text-white mb-4">Apply for Jobs Now</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Submit your application and our team will match you with the right opportunity abroad</p>
        </div>
      </div>
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          {submitted ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#1a3580' }}>Application Submitted!</h2>
              <p className="text-gray-600">Thank you! Our team will review your application and contact you within 2-3 business days.</p>
            </div>
          ) : (
            <div className="bg-white border-2 rounded-2xl p-8 shadow-sm" style={{ borderColor: '#e2e8f0' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1a3580' }}>Job Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'Your full name as in passport' },
                  { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+880XXXXXXXXXX' },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your@email.com' },
                  { label: 'Passport Number', name: 'passportNo', type: 'text', placeholder: 'e.g. AB1234567' },
                  { label: 'Years of Experience', name: 'experience', type: 'number', placeholder: 'e.g. 3' },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#1a3580' }}>{f.label}</label>
                    <input type={f.type} name={f.name} required={f.name !== 'passportNo'} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder} className={inputClass} style={inputStyle} />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#1a3580' }}>Trade / Skill</label>
                  <select name="trade" required value={form.trade} onChange={handleChange} className={inputClass} style={inputStyle}>
                    <option value="">Select your trade</option>
                    {trades.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#1a3580' }}>Preferred Country</label>
                  <select name="preferredCountry" required value={form.preferredCountry} onChange={handleChange} className={inputClass} style={inputStyle}>
                    <option value="">Select preferred country</option>
                    {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#1a3580' }}>Additional Information</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Any additional details about your experience..." className={inputClass + ' resize-none'} style={inputStyle} />
                </div>
                <button type="submit" className="w-full text-white py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}>
                  Submit Application
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
