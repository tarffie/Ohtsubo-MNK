import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import Card from './Card'

import services from '../assets/data/services.json'

export default function CardsRow() {
  const [index, setIndex] = useState(0);
  const [service, setService] = useState(() => getService())

  const LEFT = 1
  const RIGHT = 0
  const ROOF = services.length - 1

  function update(direction) {
    if (direction == LEFT) {
      setIndex((prevState) => prevState > 0 ? prevState - 1 : 0)
    } else {
      setIndex((prevState) => prevState < ROOF ? prevState + 1 : ROOF)
    }
    return getService(index)
  }

  function getService() {
    return services.at(index)
  }

  return (
    <section className='py-4 px-4 flex'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='bg-marian-blue-600 p-6 rounded-lg shadow-md'>

            <div className='flex content-evenly px-10 h-24'>

              <button onClick={() => setService(update(LEFT))} className={`bg-marian-blue-600 text-white active:bg-marian-blue-600
                font-bold py-2 rounded `}>
                <FaArrowLeft />
              </button>

              <Card service={service} />

              <button onClick={() => setService(update(RIGHT))} className={`bg-marian-blue-600 text-white text-right active:bg-marian-blue-600
                font-bold py-2 rounded`}>
                <FaArrowRight />
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
