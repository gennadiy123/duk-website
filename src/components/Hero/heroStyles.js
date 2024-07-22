import styled from "styled-components";
import hero from "../../images/hero.jpg";

export const Wrapper = styled.div`
  background: url(${hero}) no-repeat center center;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  padding: 50px;
  color: white;
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 20px;
`;
