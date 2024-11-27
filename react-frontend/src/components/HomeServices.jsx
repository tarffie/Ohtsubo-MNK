import services from '../assets/data/services.json'

import Card from './Card'

export default function HomeServices() {
  return (
    <>
      <div className='bg-sky-700 mx-auto max-w-7xl px-2 py-4 sm:px-6 text-center lg:px-8'>
        <ul>
          {services.map((service, index) => (
            <Card service={service} key={index} />
          ))}
        </ul>
      </div>
    </>
  )
}
