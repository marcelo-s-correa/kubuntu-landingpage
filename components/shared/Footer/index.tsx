import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from './styles';

const PageMenu = [
    {
        label: 'Sistema',
        anchor: '',
    },
    {
        label: 'Features',
        anchor: '',
    },
    {
        label: 'Sobre',
        anchor: '',
    },
    {
        label: 'Downloads',
        anchor: '',
    },
]

const OficialMenu = [
    {
        label: 'Suporte',
        url: '',
    },
    {
        label: 'Forum',
        url: '',
    },
    {
        label: 'Comunidade',
        url: '',
    },
]


const Footer: React.FC = () => {
  return(
      <Container>
          <div className="content">
          <Image src={'/black.png'} alt="Kubuntu" width={'120px'} height={'60px'}/>;
          <div className="students">
            <strong>Estudante: Júlia Magalhães Torres Calixto</strong>
              <strong>Estudante: Marcelo Silva Corrêa</strong>
            </div>
          </div>
            <div className="menus">
                <div className="page-menu">
                    <strong>Nossas informações</strong>
                    {
                        PageMenu.map(item=>(
                            <ul>
                            <li>
                                <Link href={item.anchor}>
                                <a>{item.label}</a>
                                </Link>
                            </li>
                        </ul>
                        ))
                    }
                </div>
                <div className=" -menu">
                    <strong>Site oficial</strong>
                    {
                        OficialMenu.map(item=>(
                            <ul>
                                <li>
                                    <Link href={item.url}>
                                        <a>{item.label}</a>
                                    </Link>
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="sub-footer">
                <strong> Sistemas operacionais - UGB FERP </strong>
            </div>
      </Container>
  );
}

export default Footer;