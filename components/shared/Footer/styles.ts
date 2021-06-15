import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content:space-between;
    width: 100%;
    height: 400px;
    background: #ffff;
    bottom: 0;
    position: relative;

    img {
        width: 120px;
        height: 60px;
    }

    .content {
        display: flex;
        flex-direction: column;
    }

    .menus {
        display: flex;
        gap: 16px;
    }

    .page-menu {
        display: flex;
        flex-direction: column;

    }

    .oficial-menu {
        display: flex;
        flex-direction: column;

    }

    .students {
        display: flex;
        width: fit-content;
        height: fit-content;
        flex-direction:column;
        gap: 8px;
    }

    .sub-footer {
        display: flex;
        width: 100%;
        height:60px;
        align-items: center;
        justify-content:center;
        background: #FAFAFA;
        position: absolute;
        bottom: 0;
    }
`;
