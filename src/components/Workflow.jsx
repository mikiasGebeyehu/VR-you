import code  from '../assets/code.jpg'
import { checklistItems } from '../constants'
import { CheckCircle2 } from "lucide-react";

const Workflow = () => {
  return (
    <section className='flex-col items-center '>
        <h3 className='text-3xl text-center py-5 mt-5 '>Accelerate Your <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'> Coding Workflow</span></h3>

        <div className='flex max-sm:flex-col-reverse gap-3 m-5 py-5 justify-center'>
            <img src={code} alt="code" className='w-1/2 max-sm:w-full justify-center items-center'/>
            <div className='w-full w-1/2 justify-center flex-col items-center mt-12 py-12'>
                {checklistItems.map((checklistItem) => (
                    <div className='flex gap-8 mb-5 mt-2 justify-center '>
                        <CheckCircle2 className='text-green-500 flex items center w-5 h-5 mt-1'/>
                     <ul className='flex-col items-center justify-center'>
                        <li className='text-xl justify-center flex-col items-center'>{checklistItem.title}</li>
                        <li className='mt-1 max-w-lg text-neutral-500'>{checklistItem.description}</li>
                    </ul>
                    </div>
                    
                ))}
            </div>
        </div>

    </section>
  )
}

export default Workflow
