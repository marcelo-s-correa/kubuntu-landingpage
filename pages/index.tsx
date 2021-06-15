import  Scaffold from '../components/shared/Scaffold'
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Card from '../components/Cards'
import So from '../assets/img/decoration/so.png';
import Download from '../assets/img/decoration/download.png';

import { Sponsors } from '../utils/data'
import { Container } from '../styles/pages/Home';


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
            <div className="features">
                <div className="cards">
                    <Card/>
                </div>
            </div>
            <div className="quite-content">
                <div className="suspense-content">
                    <h1>Sistemas de arquivos suportados </h1>
                </div>
                <div className="informative">
                    <h2>O Estilo do Kubuntu</h2>
                    <div className="line">.</div>
                    <p>O Plasma foi criado para não o incomodar e o ajudar a terminar as suas tarefas. Porém, debaixo da sua superfície leve e intuitiva, é pleno de potencialidades. Como tal, está à vontade para escolher as formas de o utilizar, da forma que necessita e na altura em que necessitar.</p>
                </div>
            </div>
            <div className="download-content">
                <div className="download-text">
                    <h2>Baixe e experimente Agora mesmo !</h2>
                    <div className="line">.</div>
                    <p>Kubuntu é uma alternativa gratuita, completa e de código aberto ao Microsoft Windows e Mac OS X que contém tudo que você precisa para trabalhar, jogar ou compartilhar. Confira o Tour dos recursos se quiser saber mais!
                    O Kubuntu une o Ubuntu com o KDE e o fabuloso Plasma desktop, trazendo a você um conjunto completo de aplicativos. A instalação inclui aplicativos de produtividade, escritório, e-mail, gráficos, fotografia e música prontos para uso na inicialização.</p>
                </div>
                <Image src={Download} alt="download" width={'500px'} height={'500px'}/>
            </div>
        </Scaffold>
    </Container>
    );
}

export default Home;