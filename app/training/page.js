const deployments = [
  { flag: '🇲🇾', country: 'Malaysia', category: 'Plantation Workers', count: '10,000+', desc: 'The largest deployment destination. Workers placed in palm oil plantations, rubber estates, and agricultural sectors across Peninsular and East Malaysia.' },
  { flag: '🇸🇦', country: 'Saudi Arabia', category: 'Construction', count: '20,000+', desc: 'Skilled and semi-skilled construction workers deployed for mega infrastructure and Vision 2030 projects across the Kingdom.' },
  { flag: '🇦🇪', country: 'UAE', category: 'Hospitality & Retail', count: '10,000+', desc: 'Trained workers in hospitality, retail, and customer service sectors placed in Dubai, Abu Dhabi, and other Emirates.' },
  { flag: '🇶🇦', country: 'Qatar', category: 'Infrastructure', count: '5000+', desc: 'Workers deployed for World Cup infrastructure and ongoing national development projects in Qatar.' },
  { flag: '🇰🇼', country: 'Kuwait', category: 'General Workforce', count: '2,000+', desc: 'General workforce including domestic workers, drivers, and laborers placed across Kuwait.' },
  { flag: '🌏', country: 'Oman & Maldives', category: 'Services', count: 'Growing', desc: 'Emerging destinations offering competitive salaries and excellent working conditions for Bangladeshi workers.' },
]

export default function TrainingPage() {
  return (
    <div className="bg-white">
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-100 text-sm font-semibold tracking-widest uppercase mb-3">Deployment Records</p>
          <h1 className="text-5xl font-bold text-white mb-4">Training & Deployment</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Our proven track record of successful worker deployments across the globe</p>
        </div>
      </div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deployments.map((d) => (
              <div key={d.country} className="bg-white border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#e2e8f0' }}>
                <div className="text-4xl mb-3">{d.flag}</div>
                <h3 className="font-bold text-xl mb-1" style={{ color: '#1a3580' }}>{d.country}</h3>
                <p className="text-sm font-semibold mb-1" style={{ color: '#4facde' }}>{d.category}</p>
                <p className="text-2xl font-bold mb-3" style={{ color: '#1a3580' }}>{d.count} Workers</p>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center rounded-2xl p-10 border-2" style={{ borderColor: '#e2e8f0' }}>
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#1a3580' }}>Ready to Join Our Workforce?</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">Take the first step toward a rewarding career abroad with Goodness Service</p>
            <a href="/contact" className="inline-block text-white px-8 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}>Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}
