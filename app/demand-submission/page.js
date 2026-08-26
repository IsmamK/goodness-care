'use client'
import { useState } from 'react'

const countries = ['Malaysia', 'Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Oman', 'Maldives', 'Russia', 'Vietnam', 'Other']
const trades = ['Plantation Worker', 'Construction Worker', 'Domestic Helper', 'Driver', 'Electrician', 'Plumber', 'Carpenter', 'Mason', 'Painter', 'Welder', 'Mechanic', 'Cleaner', 'Security Guard', 'Hospitality', 'Healthcare', 'Engineering', 'Other']

const ic = 'w-full border-2 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none'
const is = { borderColor: '#e2e8f0' }

export default function DemandSubmissionPage() {
  const [form, setForm] = useState({ companyName: '', country: '', workersRequired: '', trade: '', salaryRange: '', contactPerson: '', email: '', phone: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }) }
  function handleSubmit(e) { e.preventDefault(); setSubmitted(true) }

  const lbl = (text) => <label className="block text-sm font-semibold mb-1.5" style={{ color: '#1a3580' }}>{text}</label>

  return (
    <div className="bg-white min-h-screen">
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-blue-100 text-sm font-semibold tracking-widest uppercase mb-3">Employer Services</p>
          <h1 className="text-5xl font-bold text-white mb-4">Demand Submission</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Submit your workforce demand and we will find the right candidates for your needs</p>
        </div>
      </div>
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          {submitted ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#1a3580' }}>Demand Submitted!</h2>
              <p className="text-gray-600">Thank you. Our recruitment team will review your demand and contact you within 24 hours.</p>
            </div>
          ) : (
            <div className="bg-white border-2 rounded-2xl p-8 shadow-sm" style={{ borderColor: '#e2e8f0' }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#1a3580' }}>Workforce Demand Form</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>{lbl('Company Name')}<input type="text" name="companyName" required value={form.companyName} onChange={handleChange} placeholder="Your company name" className={ic} style={is} /></div>
                <div>{lbl('Destination Country')}<select name="country" required value={form.country} onChange={handleChange} className={ic} style={is}><option value="">Select country</option>{countries.map((c) => <option key={c} value={c}>{c}</option>)}</select></div>
                <div>{lbl('Number of Workers Required')}<input type="number" name="workersRequired" required value={form.workersRequired} onChange={handleChange} placeholder="e.g. 50" min="1" className={ic} style={is} /></div>
                <div>{lbl('Trade / Skill Required')}<select name="trade" required value={form.trade} onChange={handleChange} className={ic} style={is}><option value="">Select trade/skill</option>{trades.map((t) => <option key={t} value={t}>{t}</option>)}</select></div>
                <div>{lbl('Salary Range')}<input type="text" name="salaryRange" required value={form.salaryRange} onChange={handleChange} placeholder="e.g. USD 300-500/month" className={ic} style={is} /></div>
                <div>{lbl('Contact Person')}<input type="text" name="contactPerson" required value={form.contactPerson} onChange={handleChange} placeholder="Primary contact name" className={ic} style={is} /></div>
                <div>{lbl('Email Address')}<input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="contact@company.com" className={ic} style={is} /></div>
                <div>{lbl('Phone Number')}<input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+XXXXXXXXXXX" className={ic} style={is} /></div>
                <div>{lbl('Additional Notes')}<textarea name="notes" rows={4} value={form.notes} onChange={handleChange} placeholder="Any specific requirements..." className={ic + ' resize-none'} style={is} /></div>
                <button type="submit" className="w-full text-white py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}>Submit Demand</button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
