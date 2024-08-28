import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ContentWrapper = styled.div`
  position: relative;
  /* background-image: url("path/to/your/image.jpg"); 
  background-size: contain;
  background-position: center;  */
  /* width: 100%;
  height: 400px; */

  max-width: 400px;
  width: 100%;
  height: 300px;

  img {
    width: 100%; 
    height: 100%; 
    /* object-fit: cover;  */
    /* display: block;  */
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
