import { features } from "../constants"

const Feature = () => {
  return (
    <section>
        <h3 className="flex text-4xl item-center text-center justify-center">Easily build<span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text px-2">your code</span> </h3>

        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature) => (
                <div className="w-full sm:w-1/2 lg:w-1/3 justify-center">
                    <div className="flex gap-5 mt-5 ">
                        <div className="bg-[#262626] w-10 h-8 flex text-orange-500 rounded-full items-center justify-center p-2 mx-3">{feature.icon}</div>
                        <div>
                            <h3  className="lg:text-xl sm:text-[15px] mb-6 ">{feature.text}</h3>
                            <p className="text-neutral-500">
                                {feature.description}
                            </p>
                        </div>

                    </div>
                </div>
                
            ))}
        </div>
    </section>
  )
}

export default Feature
