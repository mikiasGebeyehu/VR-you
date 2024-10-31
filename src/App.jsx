import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Feature from "./components/Feature"
import Workflow from "./components/Workflow"
import Footer from "./components/Footer"

function App() {
  return (
    <>
         <Navbar/>
        <section className="p-5 m-5">
            <Hero /> 
            <Feature/>
            <Workflow/>
          </section>
        <Footer/>

    </>
  )
}

export default App
