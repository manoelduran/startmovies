import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;

`;

export const MapDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4.75rem;
`;