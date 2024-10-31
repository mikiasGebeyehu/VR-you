import {resourcesLinks} from '../constants'
import { platformLinks } from '../constants'
import { communityLinks } from '../constants'

const Footer = () => {
  return (
    <section className='justify-center flex items-center border-t border-neutral-700 p-5 my-12 mx-4 justify-between max-sm:flex-col max-sm:gap-7'>
        <div>
            {resourcesLinks.map((resourcesLink) => (
                <div>
                    <p className='text-xl'> {resourcesLink.label}</p>
                    <ul className='mt-2 text-neutral-500'>
                        <a href=""> <li>{resourcesLink.text}</li> </a>
                    </ul>
                </div>
            ))}
        </div>
        <div>
            {platformLinks.map((resourcesLink) => (
                <div className='max-sm:ml-6'>
                    <p className='text-xl'> {resourcesLink.label}</p>
                    <ul className='mt-2 text-neutral-500'>
                        <a href=""> <li>{resourcesLink.text}</li> </a>
                    </ul>
                </div>
            ))}
        </div>
        <div>
            {communityLinks.map((resourcesLink) => (
                <div className='-ml-4'>
                    <p className='text-xl'> {resourcesLink.label}</p>
                    <ul className='mt-2 text-neutral-500'>
                        <a href=""> <li>{resourcesLink.text}</li> </a>
                    </ul>
                </div>
            ))}
        </div>
        
    </section>
  )
}

export default Footer
