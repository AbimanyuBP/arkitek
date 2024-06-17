import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import About from '../../components/about/About'
import Mission from '../../components/mission/Mission'
import Showcase from '../../components/showcase/Showcase'
import Contacts from '../../components/contacts/Contacts'
import Footer from '../../components/footer/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Mission/>
    <Showcase/>
    <Contacts/>
    <Footer/>
    </>
  )
}
