import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Container } from './styles';

const NavOptions = [
    {
        label: 'O Sistema',
        anchor: ''
    },
    {
        label: 'Features',
        anchor: ''
    },
    {
        label: 'Sobre',
        anchor: ''
    },
    {
        label: 'Downloads',
        anchor: ''
    },
]

const Navbar: React.FC = () => {
 return(
     <Container>
        <Image src={'/logo.png'} width={"100px"} height={"60px"}/>
        <div className="navopts">
         {
             NavOptions.map(items=>(
                 <>
                 <ul>
                     <li>
                         <Link href={items.anchor}>
                             <a>
                                 {items.label}
                             </a>
                         </Link>
                     </li>
                 </ul>
                 </>
             ))
         }
         </div>

     </Container>
 )
}

export default Navbar;