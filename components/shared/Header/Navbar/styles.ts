import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 212px;

    img {
        width: 260px;
        height: 50px;
    }
    
    .navopts {
        width: fit-content;
        height: 100%;
        display:flex;
        gap: 30px;
        align-items: center;
        justify-content: center;

        a {
            color: #fff;
        }
    }
`;
