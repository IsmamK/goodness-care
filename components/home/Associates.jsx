'use client'

const logos = [
  { src: '/clients/nationgate.png', alt: 'NationGate' },
  { src: '/clients/koito.png', alt: 'Koito' },
  { src: '/clients/samsung.png', alt: 'Samsung' },
  { src: '/clients/hyundai.png', alt: 'Hyundai' },
  { src: '/clients/jp-printers.png', alt: 'J.P. Printers Sdn. Bhd.' },
  { src: '/clients/napco.png', alt: 'Napco Security Technologies' },
  { src: '/clients/fang-pai.png', alt: 'Fang & Pai Industries Sdn Bhd' },
  { src: '/clients/cab-cakaran.png', alt: 'CAB Cakaran Corporation Berhad' },
  { src: '/clients/pamir.png', alt: 'Pamir Development Sdn Bhd' },
  { src: '/clients/mynews.png', alt: 'myNEWS' },
  { src: '/clients/torto.png', alt: 'Torto' },
  { src: '/clients/just-energy.png', alt: 'Just Energy Sdn Bhd' },
  { src: '/clients/texas-chicken.png', alt: 'Texas Chicken' },
  { src: '/clients/cellini.png', alt: 'Cellini' },
  { src: '/clients/xsd.png', alt: 'XSD International Paper' },
  { src: '/clients/doosan.png', alt: 'Doosan' },
  { src: '/clients/ytl.png', alt: 'YTL Corporation Berhad' },
  { src: '/clients/fortress.png', alt: 'Fortress' },
  { src: '/clients/xinyi-solar.png', alt: 'Xinyi Solar Holdings' },
]

export default function Associates() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 scroll-animate animate-in">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#4facde' }}>Our Clients</p>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a3580' }}>Trusted By Global Leaders</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }} />
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-6 h-16 w-36 flex items-center justify-center transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 max-w-full object-contain"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
