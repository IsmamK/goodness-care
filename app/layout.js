import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollAnimationProvider from '../components/ScrollAnimationProvider'

export const metadata = {
  title: 'Goodness Service | Global Workforce Solutions',
  description: 'Goodness Service — Government Approved Recruiting Licence No. RL-2068. One of the most trusted human resource management companies in Bangladesh.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/icon-180.png" />
      </head>
      <body style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Navbar />
        <ScrollAnimationProvider>
          <main>{children}</main>
        </ScrollAnimationProvider>
        <Footer />
      </body>
    </html>
  )
}
