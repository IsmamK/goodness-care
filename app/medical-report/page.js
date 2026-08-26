'use client'
import { useState } from 'react'

export default function MedicalReportPage() {
  const [passport, setPassport] = useState('')
  const [searched, setSearched] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSearched(true)
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-100 text-sm font-semibold tracking-widest uppercase mb-3">Online Service</p>
          <h1 className="text-5xl font-bold text-white mb-4">Medical Report</h1>
          <p className="text-blue-100 max-w-xl mx-auto">Check your medical report status by entering your passport number below</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 rounded-2xl p-8 shadow-sm" style={{ borderColor: '#e2e8f0' }}>
            <div className="text-center mb-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'linear-gradient(135deg, #4facde, #1a3580)' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#1a3580' }}>Check Medical Status</h2>
              <p className="text-gray-500 text-sm">Enter your passport number to retrieve your medical report</p>
            </div>

            {searched ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1a3580' }}>No Record Found</h3>
                <p className="text-gray-500 text-sm mb-4">No medical report found for passport: <strong>{passport}</strong></p>
                <p className="text-gray-500 text-sm mb-6">Please contact our office for assistance.</p>
                <button
                  onClick={() => { setSearched(false); setPassport('') }}
                  className="text-white px-6 py-2.5 rounded-xl font-semibold text-sm"
                  style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}
                >
                  Search Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1a3580' }}>Passport Number</label>
                  <input
                    type="text"
                    required
                    value={passport}
                    onChange={(e) => setPassport(e.target.value)}
                    className="w-full border-2 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none uppercase"
                    style={{ borderColor: '#e2e8f0' }}
                    placeholder="e.g. AB1234567"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg"
                  style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}
                >
                  Check Status
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t-2 text-center text-sm text-gray-500" style={{ borderColor: '#e2e8f0' }}>
              Need help? Call us at{' '}
              <a href="tel:+8801335181717" className="font-semibold" style={{ color: '#1a3580' }}>+88 01335 18 17 17</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
