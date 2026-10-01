'use client'

const countries = [
  {
    name: 'Saudi Arabia',
    workers: '20,000+',
    image: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/saudi-1-760x4752x.jpg',
    flag: 'https://flagcdn.com/sa.svg',
  },
  {
    name: 'United Arab Emirates',
    workers: '10,000+',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
    flag: 'https://flagcdn.com/ae.svg',
  },
  {
    name: 'Qatar',
    workers: '5000+',
    image: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/herobestdohahotels-rafflesdoha-exteriorday-creditrafflesdoha.jpg',
    flag: 'https://flagcdn.com/qa.svg',
  },
  {
    name: 'Malaysia',
    workers: '10,000+',
    image: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/kuala-lumpur.avif',
    flag: 'https://flagcdn.com/my.svg',
  },
  {
    name: 'Russia',
    workers: '500+',
    image: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/russia.jpg',
    flag: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/flag-russia.webp',
  },
  {
    name: 'Maldives',
    workers: '400+',
    image: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/maldives.jpeg',
    flag: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/flag_of_maldivessvg.png',
  },
  {
    name: 'Oman',
    workers: '600+',
    image: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/muscat-oman-1-1600x900.webp',
    flag: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/flag_of_omansvg.webp',
  },
  {
    name: 'Kuwait',
    workers: '450+',
    image: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/b9d212f92b2d308b19b9c6b8af5047ad.jpg',
    flag: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/flag_of_omansvg_daRfV6F.webp',
  },
  {
    name: 'Vietnam',
    workers: '300+',
    image: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/ba-na-hills-700-3.jpg',
    flag: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/images.png',
  },
]

export default function GlobalNetwork() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 scroll-animate animate-in">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#4facde' }}>Worldwide Presence</p>
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a3580' }}>Our Global Network</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }} />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We have successfully placed thousands of skilled workers in 20+ countries across Asia, the Middle East, and beyond.
          </p>
        </div>

        {/* Country cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {countries.map((country, i) => (
            <div
              key={country.name}
              className="scroll-animate animate-in rounded-2xl overflow-hidden border-2 hover:shadow-xl transition-all duration-300 group"
              style={{ borderColor: '#e2e8f0', transitionDelay: `${(i % 3) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Flag */}
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="absolute top-3 right-3 w-10 h-7 object-cover rounded shadow"
                />
              </div>
              {/* Info */}
              <div className="p-4 bg-white">
                <h3 className="font-bold text-base mb-1" style={{ color: '#1a3580' }}>{country.name}</h3>
                <p className="text-sm text-gray-500">{country.workers} workers placed</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
