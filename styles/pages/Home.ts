import styled from 'styled-components';
import Subbg from '../../assets/img/subbg.png';
import Quitebg from '../../assets/img/decoration/quitebg.png';
 
export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .sub-content {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: fit-content;
        background: url(${Subbg}) no-repeat;
        background-position-y: -850px;
        background-size: 100%;
        align-items: center;
        justify-content: center;
    }

    .pc-content {
        width: 100vw;
        position: relative;
        bottom: 170px;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 35px;

        img{
            filter: drop-shadow(0px 16px 30px rgba(0, 0, 0, 0.22));
        }
    }

    .sponsors {
        margin: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        gap: 37px;
        
        img {
            width: 180px;
            height: 78.36px;
        }
    }

    .intro-text {
        width: 1070px;
        height: 500px;
        margin: 85px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        padding: 20px;
        gap: 80px;

        img {
            width: 500px;
            height: 500px;
        }
    }

    .content {
        width: 481px;
        height: 395px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .line {
        display: flex;
        width: 20%;
        height: 4px;
        background: #000;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .features {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 1200px;
        width: 100%;
        background: linear-gradient(180deg, #110101 0%, #1D2B32 0.01%, #144456 79.69%);
    
        .cards{
            max-width: 1300px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding: 16px;
            justify-content: center;
            gap: 60px;
        }
    
    }


    .quite-content {
        display: flex;
        flex-direction: column;
        position: static;
        width: 100vw;
        height: 1665.58px;
        align-items: center;
        justify-content: flex-start;
        background: url(${Quitebg}) no-repeat;
        background-size: 100%;
        background-position-y: -100px;
    }

    .suspense-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:flex-start;
        padding: 40px;
        width: 70%;
        height: 600px;
        bottom: 110px;
        position: relative;
        background: #FFFFFF;
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(18px);
        border-radius: 30px;
    }

    .informative {
        position: relative;
        left: -580px;
        top: 300px;
        display: flex;
        flex-direction: column;
        width: 480px;
        height: 325px;
    
        h2 {
            font-size: 38px;
        }

        p {
            font-size: 18px;
        }
    }

    .download-content {
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        padding: 20px;
        gap: 76px;
        width: 100%;
        height: 595px;
    
    .download-text {
        width: 460px;
    }
    
    }
`;
