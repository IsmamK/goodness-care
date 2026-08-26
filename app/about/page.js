'use client'
import Link from 'next/link'

const coreValues = [
  { title: 'Integrity', desc: 'We uphold the highest ethical standards in all our recruitment practices, ensuring transparency and honesty with every client and candidate.' },
  { title: 'Excellence', desc: 'We strive for excellence in service delivery, continuously improving our processes to exceed client expectations.' },
  { title: 'Client-Centric', desc: "Our clients' success is our priority. We tailor every solution to meet unique employer and worker needs." },
  { title: 'Innovation', desc: 'We leverage modern IT-based processes and technology to streamline recruitment and enhance efficiency.' },
  { title: 'Accountability', desc: 'We take full responsibility for our commitments, maintaining clear communication and delivering on promises.' },
]

const team = [
  { name: 'Tareq Abdullah', role: 'Chief Executive Officer', photo: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/whatsapp-image-2025-09-09-at-154549_bda5f384.jpg' },
  { name: 'Md. Nazrul Islam', role: 'Head of Operations', photo: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/md-nazrul-islam-head-of-operations.jpg' },
  { name: 'Aleure Rahman', role: 'Head of Accounts', photo: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/aleure-rahman-head-of-accounts.jpg' },
  { name: 'Md. Azizul Islam', role: 'General Manager', photo: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/md-azizul-islam-general-manager.jpg' },
  { name: 'Sunny Quazi Saad Billah', role: 'HR & Coordination Manager', photo: 'https://stechhr.com/backend/media/uploaded_images/uploaded_images/sunny-quazi-saad-billah-hr-coordination-manager.jpg' },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1a3580, #4facde)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-100 text-sm font-semibold tracking-widest uppercase mb-3">Goodness Service Ltd.</p>
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">GOVT. APPROVED RECRUITING LICENCE NO. RL-2068 — Your trusted partner for global workforce solutions</p>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate-left animate-in">
              <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#4facde' }}>WHO WE ARE</p>
              <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ color: '#1a3580' }}>
                Trusted Recruitment Partner Since Establishment
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Goodness Service Ltd., holding the prestigious Government Approved Recruiting Licence No. RL-2068, stands as one of the most trusted and experienced human resource management consultancy firms in Bangladesh. With a proven track record of exporting over 50,000 unskilled, semi-skilled, and skilled human resources globally, we offer a comprehensive one-stop solution for both employers and employees.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Led by CEO Tareq Abdullah, our dedicated and experienced team is equipped to provide exceptional service through a modern IT-based work process. We pride ourselves on commitment to ethical business practices, ensuring trusted partnerships with all our clients.
              </p>
              <ul className="space-y-3 mb-8">
                {['Government Licensed & Compliant', 'Skilled Workforce Export — 50,000+ Workers', 'Transparent & Ethical Hiring Process'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #4facde, #1a3580)' }}
                    >
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg"
                style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }}
              >
                Get In Touch
              </Link>
            </div>

            <div className="scroll-animate-right animate-in">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://stechhr.com.bd/wp-content/uploads/2022/05/silhouette-construction-workers-fabricating-steel-reinforcement-bar-construction-si.jpeg"
                  alt="Construction workers"
                  className="rounded-2xl object-cover w-full h-48"
                />
                <img
                  src="https://stechhr.com.bd/wp-content/uploads/2022/05/construction-worker-truss-installation.jpeg"
                  alt="Construction worker"
                  className="rounded-2xl object-cover w-full h-48"
                />
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  {[
                    { value: '50,000+', label: 'Workers Exported' },
                    { value: 'RL-2068', label: 'Govt. Licence' },
                    { value: '20+', label: 'Countries Served' },
                    { value: '90%', label: 'Satisfaction Rate' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="text-center rounded-2xl p-4 border-2"
                      style={{ borderColor: '#e2e8f0' }}
                    >
                      <p className="text-2xl font-bold mb-1" style={{ color: '#1a3580' }}>{s.value}</p>
                      <p className="text-gray-500 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-animate animate-in">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#4facde' }}>What Drives Us</p>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a3580' }}>Our Core Values</h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <div
                key={v.title}
                className="scroll-animate animate-in rounded-2xl p-6 bg-white border-2 hover:shadow-md transition-all duration-300"
                style={{ borderColor: '#e2e8f0', transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4"
                  style={{ background: 'linear-gradient(135deg, #4facde, #1a3580)' }}
                >
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#1a3580' }}>{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 scroll-animate animate-in">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#4facde' }}>LEADERSHIP</p>
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#1a3580' }}>From the CEO&apos;s Desk</h2>
          </div>
          <div
            className="scroll-animate animate-in rounded-2xl p-10 border-2"
            style={{ borderColor: '#e2e8f0' }}
          >
            <div className="flex flex-col sm:flex-row gap-8 items-start mb-6">
              <img
                src="https://stechhr.com/backend/media/uploaded_images/uploaded_images/whatsapp-image-2025-09-09-at-154549_bda5f384.jpg"
                alt="Tareq Abdullah, CEO"
                className="w-28 h-28 object-cover rounded-full border-4 flex-shrink-0"
                style={{ borderColor: '#4facde' }}
              />
              <div>
                <div className="text-5xl font-serif mb-4" style={{ color: 'rgba(79,172,222,0.3)' }}>&ldquo;</div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Goodness Service Ltd., our mission has always been clear: to connect the skilled workforce of Bangladesh with global opportunities while maintaining the highest standards of ethical recruitment. Holding Government Approved Recruiting Licence No. RL-2068 is not just a credential — it is a commitment we uphold every single day.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Over the years, we have proudly facilitated the deployment of over 50,000 workers across more than 20 countries. Each placement represents a family&apos;s hope, a career built, and trust honored.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We remain dedicated to transparent business practices, continuous improvement, and building lasting partnerships with our valued clients worldwide.
                </p>
              </div>
            </div>
            <div className="border-t-2 pt-6" style={{ borderColor: '#e2e8f0' }}>
              <p className="font-bold" style={{ color: '#1a3580' }}>Tareq Abdullah</p>
              <p className="text-sm" style={{ color: '#4facde' }}>Chief Executive Officer, Goodness Service Ltd.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 scroll-animate animate-in">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#4facde' }}>MEET THE TEAM</p>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a3580' }}>Key Leadership Team</h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #4facde, #1a3580)' }} />
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="scroll-animate animate-in rounded-2xl p-6 text-center bg-white border-2 hover:shadow-md hover:-translate-y-1 transition-all duration-300 w-52"
                style={{ borderColor: '#e2e8f0', transitionDelay: `${(i % 4) * 80}ms` }}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-3" style={{ border: '3px solid #4facde' }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-sm mb-1" style={{ color: '#1a3580' }}>{member.name}</h3>
                <p className="text-xs" style={{ color: '#4facde' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
