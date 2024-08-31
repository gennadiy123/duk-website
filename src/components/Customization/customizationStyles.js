import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
  padding: 0 10px;
`;

export const ContentWrapper = styled.div`
  position: relative;

  max-width: 480px;
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
  }

  &:first-child {
    box-sizing: border-box;
    padding: 10px;
  }

  &:not(:first-child)::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  p {
    position: absolute;
    bottom: 30px;
    left: 30px;
    margin: 0;
    color: white;
    font-size: 24px;
  }
`;
