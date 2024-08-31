import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;

  p {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  margin: 0 auto;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  text-align: center;
  border-top: 1px solid black;
  position: relative;

  * {
    padding: 10px;
    text-decoration: none;
    color: black;
    margin-right: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  *::before,
  *::after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    background-color: black;
    transition: width 0.3s ease-in-out;
  }

  *::before {
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
  }

  *::after {
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
  }

  *:hover::before,
  *:hover::after {
    width: 100%;
  }
`;
