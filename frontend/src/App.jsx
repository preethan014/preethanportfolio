import './App.css'
import About from './components/About'
import ContactForm from './components/ContactForm'
import FirstPage from './components/FirstPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
   <div className='p-outer'>
    <Navbar/>
    <FirstPage/>
    <About/>
    <Projects />
    <ContactForm/>
    <Footer/>
   </div>
  )
}

export default App
