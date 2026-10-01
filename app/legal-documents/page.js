const legalDocumentPages = [
  '/documents/legal-page-1.png',
  '/documents/legal-page-2.png',
  '/documents/legal-page-3.png',
  '/documents/legal-page-4.png',
  '/documents/legal-page-5.png',
]

export const metadata = {
  title: 'Legal Documents | Goodness Service',
  description: 'Trade licence and legal documentation for Goodness Service — Govt. Approved Recruiting Licence No. RL-2068.',
}

export default function LegalDocumentsPage() {
  return (
    <div className="bg-white">
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-100 text-sm font-semibold tracking-widest uppercase mb-3">Transparency & Compliance</p>
          <h1 className="text-5xl font-bold text-white mb-4">Legal Documents</h1>
          <p className="text-blue-100 text-base max-w-lg mx-auto">Our official trade licence and legal documentation, available for your review</p>
        </div>
      </div>

      {/* Trade Licence */}
      <section className="py-20 border-b" style={{ borderColor: '#e2e8f0' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#4facde' }}>Trade Licence</p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a3580' }}>E-Trade Licence</h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }} />
          </div>
          <div className="rounded-2xl overflow-hidden border-2 shadow-lg" style={{ borderColor: '#e2e8f0' }}>
            <img
              src="/documents/E-Trade-License.jpg"
              alt="E-Trade Licence"
              className="w-full h-auto"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href="/documents/E-Trade-License.jpg"
              download
              className="inline-block px-7 py-3.5 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg"
              style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}
            >
              Download Trade Licence
            </a>
          </div>
        </div>
      </section>

      {/* Legal Documents PDF pages */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#4facde' }}>Full Documentation</p>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a3580' }}>Legal Documents</h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }} />
          </div>

          <div className="space-y-10">
            {legalDocumentPages.map((src, i) => (
              <div key={src}>
                <p className="text-center text-xs font-semibold uppercase tracking-widest mb-3 text-gray-400">
                  Page {i + 1} of {legalDocumentPages.length}
                </p>
                <div className="rounded-2xl overflow-hidden border-2 shadow-lg" style={{ borderColor: '#e2e8f0' }}>
                  <img
                    src={src}
                    alt={`Legal document page ${i + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/documents/Legal-Documents.pdf"
              download
              className="inline-block px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 border-2 hover:bg-blue-50"
              style={{ color: '#1a3580', borderColor: '#1a3580' }}
            >
              Download Full PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
