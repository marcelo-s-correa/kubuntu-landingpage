import styled from 'styled-components';
import Subbg from '../../assets/img/subbg.png';
 
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
        background-position: center;
        background-size: 100%;
        align-items: center;
        justify-content: center;
    }

    .pc-content {
        width: 100vw;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        position: static;
        z-index: 9999;
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
`;
