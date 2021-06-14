import  Scaffold from '../components/shared/Scaffold'
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { Container } from '../styles/pages/Home';

import Kde from '../assets/img/sponsors/kde.png';
import Plasma from '../assets/img/sponsors/plasma.png';
import Linux from '../assets/img/sponsors/linux.png';
import Debian from '../assets/img/sponsors/debian.png';
import Ubuntu from '../assets/img/sponsors/ubuntu.png';

import So from '../assets/img/decoration/so.png';


const Sponsors = [
    {
        alt: 'Kde',
        path: Kde,
    },
    {
        alt: 'Plasma',
        path: Plasma,
    },
    {
        alt: 'Linux',
        path: Linux,
    },
    {
        alt: 'Debian',
        path: Debian,
    },
    {
        alt: 'Ubuntu',
        path: Ubuntu,
    },
]

const Home: React.FC = () => {
  return(
      <Container>
        <Head>
            <title>Kubuntu - OS</title>
        </Head>
        <Scaffold>
            <div className="sub-content">
            <div className="pc-content">
                <Image className="kbt-pc" src={'/pc.svg'} alt="Kubuntu Desktop" width={'786px'} height={'514px'}/>
            </div>
                <div className="sponsors">
                    {
                        Sponsors.map(item=>(
                            <Image src={item.path} alt={item.alt} width={''} height={''}/>
                        ))
                    }
                </div>
                <div className="intro-text">
                    <Image src={So} alt="So" width={'786px'} height={'514px'}/>
                    <div className="content">
                        <h1>Um sistema operacional de ponta</h1>
                            <div className="line">.</div>
                        <p>
                            Kubuntu é uma variação oficial do sistema operacional Ubuntu que usa o ambiente de desktop KDE Plasma. 
                            Usa os mesmos sistemas subjacentes, os mesmos repositórios e é lançado regularmente na mesma 
                            programação do Ubuntu.
                        </p>
                    </div>
                </div>
            </div>
        </Scaffold>
    </Container>
    );
}

export default Home;