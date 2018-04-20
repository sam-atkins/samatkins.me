import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 25px auto;
  min-width: 579px;

  @media (max-width: 700px) {
    min-width: 100px;
  }
`;