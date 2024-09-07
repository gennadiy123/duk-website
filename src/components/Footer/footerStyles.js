import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px;
  background-color: #022737;
  color: white;
  margin-top: 50px;

  input {
    height: 50px;
    width: 300px;
    margin-right: 20px;
    border: none;
    border-radius: 10px;
    padding: 0;
    padding-left: 10px;
    font-size: 16px;
  }

  button {
    height: 50px;
    width: 100px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #1d9602;
    color: white;
    font-size: 16px;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const EnterEmail = styled.div`
  font-size: 24px;
  margin-bottom: 30px;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;

  * {
    cursor: pointer;
    padding: 5px;
    margin-top: 0;
    transition: color 0.1s ease-in-out;
    color: #00d4ff;

    &:hover {
      color: #007991;
    }
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;

  * {
    margin: 0 0 12px;
    text-decoration: none;
  }

  a {
    color: #00d4ff;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: #007991;
    }
  }

  p:first-of-type {
    margin-bottom: 30px;
  }
`;

export const Contact = styled.p`
  display: flex;
  gap: 10px;
  cursor: pointer;
  align-items: center;
  margin-bottom: 0;

  img {
    width: 20px;
    height: 20px;
    margin: 0;
    vertical-align: middle;
    transition: filter 0.1s ease-in-out;
  }

  &:hover img {
    filter: brightness(0.6);
  }

  &:hover a {
    color: #007991;
  }
`;
