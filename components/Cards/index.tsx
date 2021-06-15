import React from 'react';
import Image from 'next/image';

import { Container } from './styles';

import {CardsData} from '../../utils/data';

const Card: React.FC = () => {
  return(
      <>
    {
        CardsData.map(item=>(
      <Container>          
        <Image src={item.icon} alt={item.title} width={'80px'} height={'80px'} />
        <h3 className="title">{item.title}</h3>
        <p className="text">{item.text}</p>
      </Container>
        ))    
    }
  </>
  )
}

export default Card;