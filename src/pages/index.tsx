import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

import c1 from '../assets/shirts/1.png'
import c2 from '../assets/shirts/2.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={c1} width={520} height={480} alt='' />
        
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={c2} width={520} height={480} alt='' />
        
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
