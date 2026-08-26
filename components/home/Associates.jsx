'use client'

const logos = [
  { src: 'https://jgalfalah.com/backend/media/uploaded_images/JG_Facility_Management_Logo_updated.png', alt: 'JG Facility Management' },
  { src: 'https://jgalfalah.com/backend/media/uploaded_images/Stech_Holidays_logo.jpeg', alt: 'Stech Holidays' },
  { src: 'https://jgalfalah.com/backend/media/uploaded_images/Blockchain_256_logo.png', alt: 'Blockchain 256' },
  { src: 'https://jgalfalah.com/backend/media/uploaded_images/JG_Healthcare_Logo_updated_yGIGB86.png', alt: 'JG Healthcare' },
  { src: 'https://jgalfalah.com/backend/media/uploaded_images/Stech_HR_Consultant.JPG', alt: 'Stech HR Consultant' },
  { src: 'https://jgalfalah.com/backend/media/uploaded_images/Stech-Group-Logo_1.gif', alt: 'Stech Group' },
  { src: 'https://jgalfalah.com/backend/media/uploaded_images/stech_trading.JPG', alt: 'Stech Trading' },
  { src: 'https://jgalfalah.com/backend/media/uploaded_images/Beanskafe.JPG', alt: 'Beanskafe' },
]

export default function Associates() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 scroll-animate animate-in">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#4facde' }}>Our Partners</p>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a3580' }}>Trusted By Global Leaders</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }} />
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-6 h-16 w-36 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
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
