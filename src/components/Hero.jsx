import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <section className='justify-center flex items-center bg-black-500 mt-12 py-12'>
        <div className="justify-center flex flex-col items-center">
            <h3 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR build tools 
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    <p> </p>for<p></p>developers
                </span>
            </h3>
            <p className="flex-col text-center text-neutral-500  justify-center items-center text-lg mt-10 max-w-4xl"> 
                Empower your creativity and bring your VR app ideas to life with our
                intuitive development tools. Get started today and turn your imagination
                into immersive reality!
            </p>
            <div className="justify-center text-center flex gap-5 m-10">
                <button className="bg-gradient-to-r from-orange-500 to-red-800 p-2 rounded-md">Start for free</button>
                <button className="border-2 p-2 rounded-md">Documentation</button>
            </div>
            <div className="flex w-full px-5 gap-5">
                <video autoPlay loop muted src={video1} type="video/mp4" className="w-1/2 border border-orange-500 rounded-md"></video>
                <video autoPlay loop muted  src={video2} className="w-1/2 border border-orange-500 rounded-md" type="video/mp4"></video>
            </div>


        </div>
    </section>
  )
}

export default Hero
