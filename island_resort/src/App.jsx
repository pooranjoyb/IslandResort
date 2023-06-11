import './App.css'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Room from './components/Rooms'
import Restuarant from './components/Restuarant'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='bg'>
        <Navbar />
        <Homepage />
      </div>
      <Room />
      <Restuarant />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
