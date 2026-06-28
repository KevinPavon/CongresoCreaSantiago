import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Axes from './components/Axes'
import Spaces from './components/Spaces'
import Speakers from './components/Speakers'
import Schedule from './components/Schedule'
import Venue from './components/Venue'
import Registration from './components/Registration'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-topo opacity-60" aria-hidden />
      <Header />
      <main>
        <Hero />
        <About />
        <Axes />
        <Spaces />
        <Speakers />
        <Schedule />
        <Venue />
        <Registration />
        <Sponsors />
      </main>
      <Footer />
    </div>
  )
}
