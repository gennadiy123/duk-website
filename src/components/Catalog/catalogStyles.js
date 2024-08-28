import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  border-top: 1px solid black;
  padding-top: 30px;

  * {
    max-width: 350px;
    width: 100%;
    border-radius: 5px;
  }
`;
