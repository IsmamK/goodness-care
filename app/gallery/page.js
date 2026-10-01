const galleryImages = [
  'https://stechhr.com.bd/wp-content/uploads/2022/05/silhouette-construction-workers-fabricating-steel-reinforcement-bar-construction-si.jpeg',
  'https://stechhr.com.bd/wp-content/uploads/2022/05/construction-worker-truss-installation.jpeg',

  'https://stechhr.com/backend/media/uploaded_images/uploaded_images/saudi-1-760x4752x.jpg',
  'https://stechhr.com/backend/media/uploaded_images/uploaded_images/kuala-lumpur.avif',
  'https://stechhr.com/backend/media/uploaded_images/uploaded_images/herobestdohahotels-rafflesdoha-exteriorday-creditrafflesdoha.jpg',
  'https://stechhr.com/backend/media/uploaded_images/uploaded_images/maldives.jpeg',
  'https://stechhr.com/backend/media/uploaded_images/uploaded_images/muscat-oman-1-1600x900.webp',
  'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
]

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-100 text-sm font-semibold tracking-widest uppercase mb-3">Photo Gallery</p>
          <h1 className="text-5xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-blue-100 text-base max-w-lg mx-auto">A visual journey through our work, people, and global placements</p>
        </div>
      </div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, i) => (
              <div key={i} className="aspect-video rounded-2xl overflow-hidden border-2 hover:shadow-lg transition-all duration-300" style={{ borderColor: '#e2e8f0' }}>
                <img src={src} alt={'Gallery photo ' + (i + 1)} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
