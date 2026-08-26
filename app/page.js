import Hero from '../components/home/Hero'
import GlobalNetwork from '../components/home/GlobalNetwork'
import Services from '../components/home/Services'
import Statistics from '../components/home/Statistics'
import WhyUs from '../components/home/WhyUs'
import Process from '../components/home/Process'
import Industries from '../components/home/Industries'
import Associates from '../components/home/Associates'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <GlobalNetwork />
      <Services />
      <WhyUs />
      <Process />
      <Industries />
      <Associates />
    </>
  )
}
