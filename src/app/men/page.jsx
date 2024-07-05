'use client'



import MenShirts from '@/components/MenShirts';
import MenShoes from '@/components/MenShoes';
import MenWatches from '@/components/MenWatches';
import React, { useState } from 'react'

const Men = () => {

const [sneaker, setSneaker] = useState(true);
const [shirt, setShirt] = useState(false);
const [jogger, setJogger] = useState(false);


const onSneaker = () => {
  setSneaker(true)
  setShirt(false)
  setJogger(false)

}

const onShirt = () => {
  setShirt(true)
  setSneaker(false)
  setJogger(false)
  
}

const onJogger = () => {
  setJogger(true)
  setShirt(false)
  setSneaker(false)
  
}




  return (
    <div className='px-2 md:px-20 py-6'>
      <div>
        <div className='flex justify-between items-center'>
          <div>
            <button onClick={onSneaker} className={sneaker ? 'border-b-2 border-[#A95D17] p-1 mr-2 cursor-pointer hover:scale-[1.1] transition-all ' : ' p-1 mr-2 cursor-pointer hover:scale-[1.1] transition-all ' }>Sneakers</button>
            <button onClick={onShirt} className={shirt ? 'border-b-2 border-[#A95D17] p-1 mr-2 cursor-pointer hover:scale-[1.1] transition-all ' : ' p-1 mr-2 cursor-pointer hover:scale-[1.1] transition-all ' }>Shirts</button>
            <button onClick={onJogger} className={jogger ? 'border-b-2 border-[#A95D17] p-1 mr-2 cursor-pointer hover:scale-[1.1] transition-all ' : ' p-1 mr-2 cursor-pointer hover:scale-[1.1] transition-all ' }>Watches</button>
          </div>
          <div className='hidden md:flex border p-2 w-60 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <path d="M12.5 11.7549H11.71L11.43 11.4849C12.4439 10.3089 13.0011 8.80758 13 7.25489C13 5.96931 12.6188 4.7126 11.9046 3.64368C11.1903 2.57476 10.1752 1.74164 8.98744 1.24967C7.79973 0.757699 6.49279 0.628977 5.23192 0.879781C3.97104 1.13059 2.81285 1.74965 1.90381 2.65869C0.994767 3.56773 0.375703 4.72592 0.124899 5.9868C-0.125905 7.24767 0.00281635 8.55461 0.494786 9.74233C0.986756 10.93 1.81988 11.9452 2.8888 12.6594C3.95772 13.3737 5.21442 13.7549 6.5 13.7549C8.11 13.7549 9.59 13.1649 10.73 12.1849L11 12.4649V13.2549L16 18.2449L17.49 16.7549L12.5 11.7549ZM6.5 11.7549C4.01 11.7549 2 9.74489 2 7.25489C2 4.76489 4.01 2.75489 6.5 2.75489C8.99 2.75489 11 4.76489 11 7.25489C11 9.74489 8.99 11.7549 6.5 11.7549Z" fill="black" fill-opacity="0.32"/>
</svg>
            
          </div>

        </div>

        {sneaker ? <div>
          <MenShoes/>

        </div> : null }

        {shirt ? <div>
          <MenShirts/>
        </div> : null }

        {jogger ? <div>
          <MenWatches />
        </div> : null }

        
        
      </div>
    </div>
  )
}

export default Men
