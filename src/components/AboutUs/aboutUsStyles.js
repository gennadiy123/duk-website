import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 50px;
  padding: 50px;
  text-align: center;
  align-items: center;

  * {
    /* flex: 1; */
  }
`;

export const Image = styled.img`
  max-width: 500px;
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

export const ImageSection = styled.div`
  display: flex;
  gap: 20px;
  /* flex: 2 50px; */
`;

export const Description = styled.div`
  flex: 1;
`;
